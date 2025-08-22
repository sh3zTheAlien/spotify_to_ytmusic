from flask import Flask
from ytmusic import YTManager
import json

ytmusic = YTManager()

app = Flask(__name__)

@app.route("/")
def get_playlists():
    playlists = ytmusic.get_playlists()
    return playlists

if __name__ == "__main__":
    app.run(debug=True)