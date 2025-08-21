from ytmusic import YTManager
from spotify import SpotifyManager
from rapidfuzz import fuzz

def validate_song(query_song,target_song):
    """Validates the Similarity between 2 strings in range of 0 - 100."""
    name_score = fuzz.token_set_ratio(query_song, target_song)
    print(f"Searched:{query_song} | Validated: {target_song} | Similarity: {name_score}")
    return name_score

ytmusic = YTManager()
spotify = SpotifyManager()

searched_ytplaylist = ytmusic.search_playlist('LM')
searched_song = spotify.search_song(song_title=searched_ytplaylist[0]["title"])
print(f"YTPLAYLIST: \n{searched_ytplaylist}\n\n SONG: \n{searched_song}")
