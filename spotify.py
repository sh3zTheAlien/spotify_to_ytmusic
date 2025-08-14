import constants as const
import spotipy
from spotipy.oauth2 import SpotifyOAuth

class SpotifyManager:

    def __init__(self):
        self.redirect_uri = const.REDIRECT_URI
        self.client_id = const.SPOTIFY_CLIENT_ID
        self.client_secret = const.SPOTIFY_CLIENT_SECRET
        self.auth_manager = SpotifyOAuth(client_id=self.client_id, client_secret=self.client_secret
                                         ,redirect_uri=self.redirect_uri,scope="playlist-read-private",
                                         cache_path=".cache")
        self.sp = spotipy.Spotify(auth_manager=self.auth_manager)
        self.user_id = self.sp.current_user()["id"]
        self.song_uris = []
        self.playlist_names = []

    def get_playlists(self):
        """Returns an Array with a Hash Table of All user playlists"""
        playlists = self.sp.user_playlists(user=self.user_id)
        user_playlists = [{"name": i["name"], "id": i["id"]} for i in playlists["items"]]
        return user_playlists

    def selected_playlists(self, var, playlist_name):
        """Checks what playlists the user has selected"""
        if var.get() == 1:
                self.playlist_names.append(playlist_name)
        else:
            self.playlist_names.remove(playlist_name)