import sys
import re
import matplotlib.pyplot as plt
from colorsys import hls_to_rgb

def parse_hsl(hsl_string: str) -> tuple:
    """ HSL 文字列をパースして (H, S, L) のタプルに変換する """
    match = re.match(r"(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%", hsl_string)
    if not match:
        raise ValueError("Invalid HSL format. Expected 'H S% L%'")

    h, s, l = map(float, match.groups())
    return (h / 360, l / 100, s / 100)

def display_color(hsl_string):
    """ 指定された HSL の色を表示 """
    h, l, s = parse_hsl(hsl_string)
    rgb = hls_to_rgb(h, l, s)

    fig, ax = plt.subplots(figsize=(2, 2))
    ax.set_facecolor(rgb)
    ax.set_xticks([])
    ax.set_yticks([])
    plt.show()

color = ' '.join(sys.argv[1:4])

display_color(color)
