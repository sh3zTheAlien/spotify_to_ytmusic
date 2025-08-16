import constants as const
from ytmusicapi import YTMusic, OAuthCredentials

class YTManager:

    def __init__(self):
        self.ytmusic = YTMusic('oauth.json',oauth_credentials=OAuthCredentials(client_id=const.YT_CLIENT_ID,client_secret=const.YT_CLIENT_SECRET))

    def get_playlists(self):
        """Returns an Array with a Hash Table of All user playlists"""
        res = self.ytmusic.get_library_playlists()
        ytmusic_playlists = [{"name": res[i]['title'], "id":res[i]["playlistId"]} for i in range(len(res))]
        return ytmusic_playlists