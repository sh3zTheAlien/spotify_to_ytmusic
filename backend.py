from pprint import pprint
from ytmusicapi import YTMusic, OAuthCredentials
import os
from dotenv import load_dotenv
load_dotenv()

ytmusic = YTMusic('oauth.json',oauth_credentials=OAuthCredentials(client_id=os.getenv("CLIENT_ID"),client_secret=os.getenv("CLIENT_SECRET")))
pprint(ytmusic.get_home())