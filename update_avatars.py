import re
import random

with open('static/course-details.html', 'r', encoding='utf-8') as f:
    content = f.read()

black_photos = [
    '1531384441138-2736e62e0919', '1506803682981-6e718a9dd3ee', '1531123897727-8f129e1bfa8ea',
    '1507152832244-10d45c7eda57', '1522529599102-137111716881', '1489424731084-a5d8b219a5bb',
    '1511556820780-d912e42b4980', '1511556532299-8f662fc26c06', '1570158268183-d296b2892211',
    '1543269664-56d93c1b41a6', '1526413232644-8a40f41ce931', '1507081323647-4d250478b919',
    '1530268729831-4b0b9e170218', '1542206395-9feb3edaa68d'
]

def repl(match):
    photo = random.choice(black_photos)
    return 'https://images.unsplash.com/photo-' + photo + '?q=80&w=150&auto=format&fit=crop'

new_content = re.sub(r'https://images\.unsplash\.com/photo-[^"]+', repl, content)

with open('static/course-details.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Done!')
