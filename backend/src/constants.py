import os
from dotenv import load_dotenv
load_dotenv()

YT_CLIENT_ID = os.getenv("YT_CLIENT_ID")
YT_CLIENT_SECRET = os.getenv("YT_CLIENT_SECRET")
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")
SPOTIFY_IMAGE_PATH = os.getenv("SPOTIFY_IMAGE_PATH")
YTMUSIC_IMAGE_PATH = os.getenv("YTMUSIC_IMAGE_PATH")
CHANNEL_ID = os.getenv("CHANNEL_ID")


def ms_to_minutes_seconds(milliseconds):
    """Convert milliseconds to MM:SS format"""
    if milliseconds is None:
        return "00:00"

    total_seconds = milliseconds // 1000
    minutes = total_seconds // 60
    seconds = total_seconds % 60
    return f"{minutes:02d}:{seconds:02d}"