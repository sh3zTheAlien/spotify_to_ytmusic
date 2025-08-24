from flask import Flask
from flask_cors import CORS, cross_origin
from ytmusic import YTManager
import json

ytmusic = YTManager()

app = Flask(__name__)
cors = CORS(app) # allow CORS for all domains on all routes.
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def get_playlists():
    playlists = ytmusic.get_playlists()
    return json.dumps(playlists)

if __name__ == "__main__":
    app.run(debug=False)