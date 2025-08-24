import constants as const
from ytmusicapi import YTMusic, OAuthCredentials

class YTManager:

    def __init__(self):
        self.ytmusic = YTMusic(const.OAUTH_JSON_PATH,oauth_credentials=OAuthCredentials(client_id=const.YT_CLIENT_ID,client_secret=const.YT_CLIENT_SECRET))

    def get_playlists(self):
        """Returns an Array with a Hash Table of All user playlists"""
        res = self.ytmusic.get_library_playlists()
        ytmusic_playlists = [{"name": res[i]['title'], "id":res[i]["playlistId"]} for i in range(len(res))]
        return ytmusic_playlists

    def search_playlist(self,playlist_id: str):
        """Returns an Array with a Hash Table with songs,artists from the searched playlist."""
        try:
            searched_playlist = self.ytmusic.get_playlist(playlistId=playlist_id,limit=None)
            songs = searched_playlist["tracks"]
            return [{"title":songs[i]["title"],
                     "artists":[artist["name"] for artist in songs[i]["artists"]] if songs[i].get("artists") else None,
                     "album":songs[i]["album"]["name"] if songs[i].get("album") else None,
                     "duration":songs[i].get("duration_seconds") or songs[i].get("duration")}
                    for i in range(len(songs)) if songs]
        except KeyError:
            return "Please provide a valid playlist id."

    def search_songs(self,songs_to_search: list[str]):
        #in progress
        """Returns a JSON of the searched songs
           songs_to_search: a list of the song names you want to search"""
        searched_songs = []
        for song in songs_to_search:
            searched_songs.append(self.ytmusic.search(query=song))
        return searched_songs


    def create_playlist(self,songs_ids: list[str]):
        """Creates a playlist with the given song id's"""
        new_playlist_id = self.ytmusic.create_playlist(title='Test',description='Testing the Playlist')
        return self.ytmusic.add_playlist_items(playlistId=new_playlist_id,videoIds=songs_ids,duplicates=False)

    def add_playlist(self):
        pass
