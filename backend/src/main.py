from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .spotify import SpotifyManager
from .ytmusic import YTManager

app = FastAPI()

# Configure CORS
# This is necessary to allow the frontend (running on a different port)
# to communicate with the backend.
# For production, you should restrict the allowed origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TransferRequest(BaseModel):
    spotify_playlist_id: str
    ytmusic_playlist_id: str

@app.get("/")
def read_root():
    return {"message": "Spotify to YT Music API"}

@app.get("/api/spotify/playlists")
def get_spotify_playlists():
    """
    Returns a list of the user's Spotify playlists.
    """
    sp = SpotifyManager()
    return sp.get_playlists()

@app.get("/api/ytmusic/playlists")
def get_ytmusic_playlists():
    """
    Returns a list of the user's YouTube Music playlists.
    """
    yt = YTManager()
    return yt.get_playlists()

@app.post("/api/transfer")
def transfer_playlist(transfer_request: TransferRequest):
    """
    Transfers a playlist from Spotify to YouTube Music.
    """
    # TODO: Implement the actual transfer logic
    return {"message": f"Transferring playlist {transfer_request.spotify_playlist_id} to {transfer_request.ytmusic_playlist_id}"}