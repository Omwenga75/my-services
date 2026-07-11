import re

with open('static/books.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the img styles
html = re.sub(
    r'<img src="([^"]+)" style="height: 190px; width: 140px;[^>]+>',
    r'<img src="\1" style="width: 100%; height: 100%; object-fit: cover; border-top-left-radius: 17px; border-top-right-radius: 17px; display: block;">',
    html
)

# Add style to book-cover-wrapper
html = re.sub(
    r'<div class="book-cover-wrapper (cv-[a-z]+)">',
    r'<div class="book-cover-wrapper \1" style="padding: 0; height: 260px; border-bottom: none; display: block;">',
    html
)

with open('static/books.html', 'w', encoding='utf-8') as f:
    f.write(html)
