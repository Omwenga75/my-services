import os
import glob

html_files = glob.glob('static/*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'quicklearn-logo.svg' in content:
        content = content.replace('quicklearn-logo.svg', 'logo.jpeg')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')
