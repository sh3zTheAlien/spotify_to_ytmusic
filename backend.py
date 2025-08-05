import os
from pprint import pprint
from dotenv import load_dotenv
from ytmusicapi import YTMusic, OAuthCredentials
import spotipy
from spotipy.oauth2 import SpotifyOAuth

load_dotenv()

# youtube authentication remember to add your client_id and secret to get it to work

ytmusic = YTMusic('oauth.json',oauth_credentials=OAuthCredentials(client_id=os.getenv("CLIENT_ID"),client_secret=os.getenv("CLIENT_SECRET")))
pprint(ytmusic.get_home())

# spotify authentication remember to add your client_id and client_secret to get it to work

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=os.getenv("SPOTIFY_CLIENT_ID"),
                                               client_secret=os.getenv("SPOTIFY_CLIENT_SECRET"),
                                               redirect_uri="https://example.com/callback",
                                               scope="user-library-read"))

results = sp.current_user_saved_tracks()
for idx, item in enumerate(results['items']):
    track = item['track']
    print(idx, track['artists'][0]['name'], " – ", track['name'])
