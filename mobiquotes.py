import tweepy
import random
import tkinter as tk
from tkinter import *
from PIL import Image, ImageTk
import os

def main():

    window = tk.Tk()
    window.geometry('700x500')
    window.resizable(False, False)
    window.title("MobiQuotes")

    space1 = tk.Label(window, text="")
    space1.pack()

    img = ImageTk.PhotoImage(Image.open("logo.png"))
    panel = Label(window, image = img)
    panel.pack(side = "top", fill = "both", expand = "no")

    entry1 = tk.Entry()
    entry1.insert(0, 'Consumer Key')
    entry1.pack(fill='x')

    entry2 = tk.Entry()
    entry2.insert(0, 'Consumer Secret')
    entry2.pack(fill='x')

    entry3 = tk.Entry()
    entry3.insert(0, 'OAuth Token')
    entry3.pack(fill='x')

    entry4 = tk.Entry()
    entry4.insert(0, 'OAuth Secret')
    entry4.pack(fill='x')

    quote = Text(window, height = 13, width = 52)
    quote.config(highlightbackground="lightgrey", highlightthickness="1",font=("Helvetica", 14, "normal"))
    quote.insert(tk.END, " Quote")
    quote.pack(fill='x')

    def submit_name():
        twitter_auth_keys = {
            "consumer_key"        : entry1.get(),
            "consumer_secret"     : entry2.get(),
            "access_token"        : entry3.get(),
            "access_token_secret" : entry4.get()
        }

        auth = tweepy.OAuthHandler(
            twitter_auth_keys['consumer_key'],
            twitter_auth_keys['consumer_secret']
        )
        auth.set_access_token(
            twitter_auth_keys['access_token'],
            twitter_auth_keys['access_token_secret']
        )
        api = tweepy.API(auth)
        tweet = quote.get("1.0",'end-1c')
        status = api.update_status(status=tweet)

    submit= tk.Button(window, text= "Tweet Quote",command=submit_name)
    submit.pack(pady=15, fill='x')

    window.mainloop()
 
if __name__ == "__main__":
    main()