from ytmusic import YTManager
from spotify import SpotifyManager
from rapidfuzz import fuzz

def validate_song(query_song,target_song):
    """Validates the Similarity between 2 strings in range of 0 - 100."""
    name_score = fuzz.token_set_ratio(query_song, target_song)
    print(f"Searched:{query_song} | Validated: {target_song} | Similarity: {name_score}\n")
    return name_score

ytmusic = YTManager()
spotify = SpotifyManager()

ytplaylist_songs = ytmusic.search_playlist('LM')

for ytsong in range(len(ytplaylist_songs)):
    target_song = ytplaylist_songs[ytsong]["title"]
    searched_song = spotify.search_song(target_song)
    print("***************************************************************")
    for spsong in range(len(searched_song)):
        query_song = searched_song[spsong]["title"]
        validate_song(query_song,target_song)
        #add some exceptions in case there are no results



