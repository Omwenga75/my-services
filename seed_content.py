"""
seed_content.py  –  Reads the static JS course-content files,
converts them to valid JSON, and writes notes_and_quizzes.json.
Run once:  python seed_content.py
"""

import re
import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JS_DIR   = os.path.join(BASE_DIR, "static", "js")
OUT_PATH = os.path.join(BASE_DIR, "notes_and_quizzes.json")


def js_obj_to_json(text: str) -> str:
    """
    Convert a subset of JavaScript object literal syntax to valid JSON.
    Strategy: tokenize the JS text character-by-character, tracking whether
    we are inside a string or not.  Only transform unquoted keys outside strings.
    """
    result = []
    i = 0
    n = len(text)

    def skip_whitespace():
        nonlocal i
        while i < n and text[i] in ' \t\r\n':
            i += 1

    def read_js_string():
        """Read a JS string (single or double quoted) and return as a JSON string."""
        nonlocal i
        quote_char = text[i]
        i += 1
        chars = ['"']  # JSON uses double quotes
        while i < n:
            c = text[i]
            if c == '\\':
                next_c = text[i+1] if i+1 < n else ''
                if next_c == quote_char and quote_char == "'":
                    # \' -> ' (unescape single quotes)
                    chars.append("'")
                    i += 2
                else:
                    chars.append(c)
                    chars.append(next_c)
                    i += 2
            elif c == quote_char:
                i += 1
                break
            elif c == '"' and quote_char == "'":
                # escape double quotes when converting single-quoted to double-quoted
                chars.append('\\"')
                i += 1
            else:
                chars.append(c)
                i += 1
        chars.append('"')
        return ''.join(chars)

    def skip_comment():
        """Skip // or /* comments."""
        nonlocal i
        if i + 1 < n and text[i] == '/' and text[i+1] == '/':
            while i < n and text[i] != '\n':
                i += 1
            return True
        if i + 1 < n and text[i] == '/' and text[i+1] == '*':
            i += 2
            while i + 1 < n and not (text[i] == '*' and text[i+1] == '/'):
                i += 1
            i += 2
            return True
        return False

    while i < n:
        skip_whitespace()
        if i >= n:
            break

        c = text[i]

        # Skip comments
        if c == '/' and i + 1 < n and text[i+1] in ('/', '*'):
            skip_comment()
            result.append(' ')
            continue

        # String values
        if c in ('"', "'"):
            result.append(read_js_string())
            continue

        # Object key: a bare identifier followed by optional whitespace and ':'
        # This only triggers when we are at a position where a key is expected
        # We detect this by checking if the last non-whitespace character in result
        # is '{' or ','
        if c.isalpha() or c == '_' or c == '$':
            # Read the identifier
            start = i
            while i < n and (text[i].isalnum() or text[i] in ('_', '$')):
                i += 1
            ident = text[start:i]

            # Check what follows (skip whitespace)
            j = i
            while j < n and text[j] in ' \t':
                j += 1

            if j < n and text[j] == ':':
                # This is an object key — quote it
                result.append(f'"{ident}"')
            else:
                # Not a key — pass through (e.g., true, false, null)
                if ident == 'true':
                    result.append('true')
                elif ident == 'false':
                    result.append('false')
                elif ident == 'null':
                    result.append('null')
                elif ident == 'undefined':
                    result.append('null')
                else:
                    result.append(ident)
            continue

        # Remove trailing commas before } or ]
        if c == ',':
            result.append(c)
            i += 1
            # Look ahead for ] or }
            j = i
            while j < n and text[j] in ' \t\r\n':
                j += 1
            if j < n and text[j] in ('}', ']'):
                # Replace the trailing comma with nothing
                result.pop()
            continue

        result.append(c)
        i += 1

    return ''.join(result)


def extract_var_value(js_text: str, var_name: str) -> str:
    """Extract the raw JS value assigned to `const/let/var varName = ...`."""
    pattern = rf'(?:const|let|var)\s+{re.escape(var_name)}\s*=\s*'
    match = re.search(pattern, js_text)
    if not match:
        raise ValueError(f"Variable '{var_name}' not found")

    start = match.end()
    # Skip leading whitespace
    while start < len(js_text) and js_text[start] in ' \t\r\n':
        start += 1

    opener = js_text[start]
    closer = '}' if opener == '{' else ']'
    depth = 0
    idx = start
    in_str = False
    str_char = None

    while idx < len(js_text):
        c = js_text[idx]
        if in_str:
            if c == '\\':
                idx += 2
                continue
            if c == str_char:
                in_str = False
        else:
            if c in ('"', "'"):
                in_str = True
                str_char = c
            elif c == opener:
                depth += 1
            elif c == closer:
                depth -= 1
                if depth == 0:
                    return js_text[start:idx+1]
        idx += 1

    raise ValueError(f"Could not find closing delimiter for '{var_name}'")


def load_js_object(filename: str, var_name: str) -> dict:
    path = os.path.join(JS_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    raw_value = extract_var_value(text, var_name)
    json_str = js_obj_to_json(raw_value)

    try:
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        # Write debug output
        debug_path = os.path.join(BASE_DIR, f"_debug_{var_name}.json")
        with open(debug_path, 'w', encoding='utf-8') as df:
            df.write(json_str)
        # Show snippet around error
        char_pos = e.pos
        snippet_start = max(0, char_pos - 100)
        snippet_end = min(len(json_str), char_pos + 100)
        snippet = json_str[snippet_start:snippet_end]
        raise RuntimeError(
            f"JSON parse error for '{var_name}' at position {char_pos}: {e.msg}\n"
            f"Context: ...{snippet}...\n"
            f"Full output written to {debug_path}"
        ) from e


def main():
    print("Loading course notes...")
    notes_map = load_js_object("course_notes_data.js", "courseNotesMap")
    print(f"  Found {len(notes_map)} courses in notes data")

    print("Loading quiz data...")
    quiz1 = load_js_object("quiz_data_1.js", "quizData1")
    quiz2 = load_js_object("quiz_data_2.js", "quizData2")
    quiz3 = load_js_object("quiz_data_3.js", "quizData3")

    # Merge all quiz data
    merged_quizzes: dict = {}
    for qd in (quiz1, quiz2, quiz3):
        for course_title, topic_map in qd.items():
            if course_title not in merged_quizzes:
                merged_quizzes[course_title] = {}
            merged_quizzes[course_title].update(topic_map)

    # Build final structure: { courseTitle: { modules: [...] } }
    final_data: dict = {}
    for course_title, course_data in notes_map.items():
        modules = []
        for mod in course_data.get("modules", []):
            mod_title = mod.get("title", "")
            questions_raw = (
                merged_quizzes.get(course_title, {}).get(mod_title, [])
            )
            questions = [
                {
                    "question":    q.get("question", ""),
                    "options":     q.get("options", []),
                    "correct":     q.get("correct", 0),
                    "explanation": q.get("explanation", "")
                }
                for q in questions_raw
            ]
            modules.append({
                "title":     mod_title,
                "badge":     mod.get("badge", "Topic"),
                "notes":     mod.get("notes", []),
                "questions": questions
            })
        final_data[course_title] = {"modules": modules}

    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)

    print(f"\n✓ Wrote {OUT_PATH}")
    for title, data in final_data.items():
        mods = data["modules"]
        q_count = sum(len(m["questions"]) for m in mods)
        print(f"  {title}: {len(mods)} modules, {q_count} questions")


if __name__ == "__main__":
    main()
