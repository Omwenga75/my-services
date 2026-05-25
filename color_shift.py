from PIL import Image
import colorsys

def shift_color(r, g, b):
    # Convert to HSV
    h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
    
    # Target colors (approximate)
    # App primary light: #00A8FF (h: 200, s: 100%, v: 100%)
    # App accent: #FF7A00 (h: 29, s: 100%, v: 100%)
    
    # If the color is Teal/Greenish (h between 0.4 and 0.55 roughly)
    if 0.4 < h < 0.6 and s > 0.2 and v > 0.2:
        # Shift to App Primary Light (#00A8FF) -> h ~ 0.555
        target_h, target_s, target_v = colorsys.rgb_to_hsv(0/255.0, 168/255.0, 255/255.0)
        return colorsys.hsv_to_rgb(target_h, s * 1.2, v)
        
    # If the color is Yellow/Gold (h between 0.05 and 0.15)
    elif 0.05 < h < 0.18 and s > 0.2 and v > 0.2:
        # Shift to App Accent (#FF7A00) -> h ~ 0.08
        target_h, target_s, target_v = colorsys.rgb_to_hsv(255/255.0, 122/255.0, 0/255.0)
        return colorsys.hsv_to_rgb(target_h, target_s, target_v)
        
    # Return original
    return r/255.0, g/255.0, b/255.0

def process_image():
    img = Image.open('static/images/logo.jpeg').convert('RGBA')
    data = img.load()
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = data[x, y]
            if a > 0:
                nr, ng, nb = shift_color(r, g, b)
                # Keep original intensity but use new color
                data[x, y] = (int(nr*255), int(ng*255), int(nb*255), a)
                
    img = img.convert('RGB')
    img.save('static/images/logo.jpeg')

if __name__ == '__main__':
    process_image()
    print("Done")
