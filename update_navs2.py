import glob

html_files = glob.glob('static/*.html')
for file in html_files:
    if 'login.html' in file or 'signup.html' in file or 'projects.html' in file:
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<a href="/projects">Projects</a>' not in content:
        # Insert after Books
        content = content.replace('<a href="/books">Books</a>', '<a href="/books">Books</a>\n                <a href="/projects">Projects</a>')
        content = content.replace('<a href="/books" class="active">Books</a>', '<a href="/books" class="active">Books</a>\n                <a href="/projects">Projects</a>')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')

# Also we need to make projects link active if we are in projects.html, and ensure it's there
with open('static/projects.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add link to projects.html itself if missing
if '<a href="/projects">Projects</a>' not in content and '<a href="/projects" class="active">Projects</a>' not in content:
    content = content.replace('<a href="/books">Books</a>', '<a href="/books">Books</a>\n                <a href="/projects">Projects</a>')
    content = content.replace('<a href="/books" class="active">Books</a>', '<a href="/books">\n                <a href="/projects" class="active">Projects</a>')

content = content.replace('<a href="/projects">Projects</a>', '<a href="/projects" class="active">Projects</a>')
content = content.replace('<a href="/books" class="active">Books</a>', '<a href="/books">Books</a>')

with open('static/projects.html', 'w', encoding='utf-8') as f:
    f.write(content)
