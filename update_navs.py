import os
import glob

html_files = glob.glob('static/*.html')
for file in html_files:
    if 'login.html' in file or 'signup.html' in file:
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'logo-image' not in content:
        content = content.replace('<nav class="navbar">\n        <div class="nav-links"', '<nav class="navbar">\n        <a href="/" class="logo-image">\n            <img src="/static/images/quicklearn-logo.svg" alt="QuickLearn Logo">\n        </a>\n        <div class="nav-links"')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')
