import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

load_dotenv()

class Spotify:

    def __init__(self):
        self.redirect_uri = os.getenv("REDIRECT_URI")
        self.client_id = os.getenv("SPOTIFY_CLIENT_ID")
        self.client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
        self.auth_manager = SpotifyOAuth(client_id=self.client_id, client_secret=self.client_secret
                                         ,redirect_uri=self.redirect_uri,
                                         cache_path=".cache")
        self.sp = spotipy.Spotify(auth_manager=self.auth_manager)
        self.user_id = self.sp.current_user()["id"]

    def get_playlists(self):
        pass

sptf = Spotify()
print(sptf.user_id)