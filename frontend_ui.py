import customtkinter
from PIL import Image


class MyFrame(customtkinter.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)

        # add widgets onto the frame
        self.label = customtkinter.CTkLabel(self)
        self.label.grid(row=0, column=0, padx=20)

        #Layout the Spotify and Youtube Logo
        spotify_image_path = "spotify_to_ytmusic/Images/spotify-icon.png"
        youtube_image_path = "spotify_to_ytmusic/Images/ytmusic-icon.webp"

        self.spotify_image = customtkinter.CTkImage(
            light_image=Image.open(spotify_image_path),
            dark_image=Image.open(spotify_image_path),
            size=(250, 250)
        )
        self.spotify_label = customtkinter.CTkLabel(self, image=self.spotify_image, text="")
        self.spotify_label.grid(row=1, column=0, padx=10, pady=10)

        self.youtube_image = customtkinter.CTkImage(
            light_image=Image.open(youtube_image_path),
            dark_image=Image.open(youtube_image_path),
            size=(250, 250)
        )
        self.youtube_label = customtkinter.CTkLabel(self, image=self.youtube_image, text="")
        self.youtube_label.grid(row=1, column=1, padx=10, pady=10)


        # Creating the Exit Button
        self.button = customtkinter.CTkButton(self, text="Exit App", command=self.exit_click, fg_color="red")
        self.button.grid(row=0, column=0, padx=10, pady=10)

        # Creating Playlist Buttons
        self.create_playlist_button = customtkinter.CTkButton(self, text="Create Playlist", command=self.create_playlist, fg_color="red")
        self.create_playlist_button.grid(row=2, column=0, padx=10, pady=10)

        self.select_playlist_button = customtkinter.CTkButton(self, text="Select Playlist", command=self.select_playlist, fg_color="red")
        self.select_playlist_button.grid(row=2, column=1, padx=10, pady=10)

        self.add_playlist_button = customtkinter.CTkButton(self, text="Add to Playlist", command=self.add_playlist, fg_color="red")
        self.add_playlist_button.grid(row=2, column=2)


    def exit_click(self):
        print("You Exited the App")


    def create_playlist(self):
        print("Nice you've Created a Playlist")

    def select_playlist(self):
        print("You have Selected a Playlist")

    def add_playlist(self):
        print("You have Added to a Playlist")


class SpotifyApp(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("700x550")
        self.title("Spotify to Youtube Music")
        customtkinter.set_appearance_mode("dark")

        self.grid_rowconfigure(0, weight=1)  # configure grid system
        self.grid_columnconfigure(0, weight=1)

        self.my_frame = MyFrame(master=self)
        self.my_frame.grid(row=0, column=0, padx=20, pady=20, sticky="nsew")



