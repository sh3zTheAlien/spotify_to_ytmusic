from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.config import Config
from kivy.graphics import RoundedRectangle
from kivy.lang import Builder
from src.spotify import SpotifyManager


#(0,0) at kivy is at the bottom left
Config.set('graphics', 'width', '1050')
Config.set('graphics', 'height', '750')

class MyApp(App):
    def __init__(self):
        super().__init__()
        self.sp = SpotifyManager()

    def build(self):
        return FloatLayout()

    def select_playlist(self):
        print("Select Playlist")

    def add_playlist(self):
        print("Add Playlist")

    def create_playlist(self):
        print("Create Playlist")

    def exit_app(self):
        self.stop()
