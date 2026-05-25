import re
import random
import string

def get_random_string(length=8):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))

def repl(match):
    seed = get_random_string()
    # Using dicebear for cartoon avatars
    return f'https://api.dicebear.com/9.x/avataaars/svg?seed={seed}'

with open('static/course-details.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Only replace unsplash photos that have w=150 (avatars)
# The old format might be: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=150&auto=format&fit=crop"
new_content = re.sub(r'https://images\.unsplash\.com/photo-[^"]+w=150[^"]*', repl, content)

with open('static/course-details.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated avatars in course-details.html')
