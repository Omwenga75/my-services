with open('static/books.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def replace_lines(start_1, end_1, img_src):
    replacement = '                    <img src="' + img_src + '" style="width: 100%; height: 100%; object-fit: cover; border-top-left-radius: 17px; border-top-right-radius: 17px; display: block;">\n'
    for i in range(start_1 - 1, end_1):
        lines[i] = ''
    lines[start_1 - 1] = replacement

replace_lines(691, 730, '/static/images/kotlin_book_cover.png')
replace_lines(758, 797, '/static/images/android_book_cover.png')

with open('static/books.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
