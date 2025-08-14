import constants as const
import customtkinter as ctk
from customtkinter import *
from PIL import Image
from spotify import SpotifyManager

class MyFrame(ctk.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)

        # add widgets onto the frame
        self.sp = SpotifyManager()
        self.label = ctk.CTkLabel(self)
        self.label.grid(row=0, column=0, padx=20)

        #Layout the Spotify and YT Music Logo with your path from ur .env file
        spotify_image_path = const.SPOTIFY_IMAGE_PATH
        youtube_image_path = const.YTMUSIC_IMAGE_PATH

        self.spotify_image = ctk.CTkImage(
            light_image=Image.open(spotify_image_path),
            dark_image=Image.open(spotify_image_path),
            size=(250, 250)
        )
        self.spotify_label = ctk.CTkLabel(self, image=self.spotify_image, text="")
        self.spotify_label.grid(row=1, column=0, padx=10, pady=10)

        self.youtube_image = ctk.CTkImage(
            light_image=Image.open(youtube_image_path),
            dark_image=Image.open(youtube_image_path),
            size=(250, 250)
        )
        self.youtube_label = ctk.CTkLabel(self, image=self.youtube_image, text="")
        self.youtube_label.grid(row=1, column=1, padx=10, pady=10)


        # Creating the Exit Button
        self.button = ctk.CTkButton(self, text="Exit App", command=lambda: self.exit_app(root=self.master), fg_color="red")
        self.button.grid(row=0, column=0, padx=10, pady=10)

        # Creating Playlist Buttons
        self.create_playlist_button = ctk.CTkButton(self, text="Create Playlist", command=self.create_playlist, fg_color="red")
        self.create_playlist_button.grid(row=2, column=0, padx=10, pady=10)

        self.select_playlist_button = ctk.CTkButton(self, text="Select Playlist", command=self.select_playlist_window, fg_color="red")
        self.select_playlist_button.grid(row=2, column=1, padx=10, pady=10)

        self.add_playlist_button = ctk.CTkButton(self, text="Add to Playlist", command=self.add_playlist, fg_color="red")
        self.add_playlist_button.grid(row=2, column=2)

    def create_playlist(self):
        print("Nice you've Created a Playlist")

    def select_playlist_window(self):
        """Pops up Select Playlists window and checks what playlists the user has selected."""
        child_window = ctk.CTkToplevel(self)
        child_window.title("Select Playlists")
        child_window.geometry("730x600")
        child_window.configure(bg="black")
        user_playlists = self.sp.get_playlists()
        child_window.grab_set()
        child_window.focus_force()

        for i,item in enumerate(user_playlists):
            intvar = IntVar()
            test_checkbox = ctk.CTkCheckBox(child_window,variable=intvar,onvalue=1,offvalue=0,height=1,width=30,text=f"{item["name"].strip()}",
                                            command=lambda on_off=intvar,current_playlist=item:
                                            self.sp.selected_playlists(var=on_off, playlist_name=current_playlist))
            test_checkbox.place(x=300,y=10 + i*30)

    def add_playlist(self):
        print("You have Added to a Playlist")

    def exit_app(self,root):
        """Exits the given root window."""
        root.destroy()

class SpotifyApp(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("700x550")
        self.title("Spotify to Youtube Music")
        ctk.set_appearance_mode("dark")

        self.grid_rowconfigure(0, weight=1)  # configure grid system
        self.grid_columnconfigure(0, weight=1)

        self.my_frame = MyFrame(master=self)
        self.my_frame.grid(row=0, column=0, padx=20, pady=20, sticky="nsew")



