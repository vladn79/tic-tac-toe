import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Хрестики-нулики")
        self.current_player = 'X'
        self.board = [[' ' for _ in range(3)] for _ in range(3)]

        for i in range(3):
            for j in range(3):
                btn = tk.Button(self.window, text='', font=('normal', 20), width=5, height=2,
                                command=lambda row=i, col=j: self.on_click(row, col))
                btn.grid(row=i, column=j)

    def on_click(self, row, col):
        if self.board[row][col] == ' ':
            self.board[row][col] = self.current_player
            self.update_button(row, col)

            if self.check_winner():
                self.show_winner()
            elif self.is_board_full():
                self.show_draw()
            else:
                self.current_player = 'O' if self.current_player == 'X' else 'X'

    def update_button(self, row, col):
        button = self.window.grid_slaves(row=row, column=col)[0]
        button.config(text=self.current_player, state=tk.DISABLED)

    def check_winner(self):
        for i in range(3):
            if all(self.board[i][j] == self.current_player for j in range(3)) or \
               all(self.board[j][i] == self.current_player for j in range(3)):
                return True

        if all(self.board[i][i] == self.current_player for i in range(3)) or \
           all(self.board[i][2 - i] == self.current_player for i in range(3)):
            return True

        return False

    def is_board_full(self):
        return all(self.board[i][j] != ' ' for i in range(3) for j in range(3))

    def show_winner(self):
        messagebox.showinfo("Хрестики-нулики", f"Гравець {self.current_player} переміг!")
        self.window.destroy()

    def show_draw(self):
        messagebox.showinfo("Хрестики-нулики", "Гра закінчилася внічию!")
        self.window.destroy()

    def run(self):
        self.window.mainloop()

if __name__ == "__main__":
    game = TicTacToe()
    game.run()
