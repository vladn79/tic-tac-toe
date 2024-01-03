import pygame
import sys


pygame.init()
width, height = 800, 800

white = (255, 255, 255)
black = (0, 0, 0)
line_color = (255, 255, 255)

# Створення вікна
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("TIC-TAC-TOE")

def draw_grid():
    for i in range(1, 3):
        pygame.draw.line(screen, line_color, (i * width // 3, 0), (i * width // 3, height), 5)
        pygame.draw.line(screen, line_color, (0, i * height // 3), (width, i * height // 3), 5)

# Головний цикл гри
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Заповнення вікна білим кольором
    screen.fill(black)

    # Малювання сітки
    draw_grid()

    # Оновлення вікна
    pygame.display.flip()
