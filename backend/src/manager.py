from ytmusic import YTManager
from spotify import SpotifyManager

ytmusic = YTManager()
spotify = SpotifyManager()

#print(ytmusic.get_playlists())
searched_playlist = ytmusic.search_playlist('LM') # we need the playlist id to be returned when a playlist gets pressed
#for track in searched_playlist["tracks"]:
#print(spotify.search_song(searched_playlist["tracks"][0]["title"]))
print(ytmusic.search_songs(["Interstellar"]))

#when selected playlist for transfer
#get the playlists songs,ids info # Done with YTMusic
#search given songs in ytmusic # Do it in Spotify
#validate and then
#Validation:
#if song duration,aritst name,title is the same then pass else cut
#create playlist or add to playlist
