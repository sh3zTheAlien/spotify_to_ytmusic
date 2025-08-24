from flask import Flask
from ytmusic import YTManager
import json
from flask_cors import CORS, cross_origin

ytmusic = YTManager()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def get_playlists():
    playlists = ytmusic.get_playlists()
    return json.dumps(playlists)

if __name__ == "__main__":
    app.run(debug=False)