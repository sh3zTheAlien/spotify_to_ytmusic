
import { Card } from 'primereact/card';
import { useState, useEffect } from 'react';
import { getUserPlaylists } from './requests';
function App() {
  const [playlists, setPlaylists] = useState([]);
  
  const fetchPlaylists = async () => {
    const data = await getUserPlaylists();
    setPlaylists(data);
  }

  useEffect(()=>{
    fetchPlaylists();
  },[playlists])
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="card-container" 
      style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
        <Card title="Welcome to Spotify to YouTube Music" className="welcome-card" 
        style={{backgroundColor: "black", color: "white"}}>
          <p>This application allows you to transfer your playlists from Spotify to YouTube Music.</p>
        </Card>
        {playlists.map(playlist => (
          <Card key={playlist.id} title={playlist.name} className="playlist-card" 
          style={{backgroundColor: "black", color: "white"}}>
            <p>Playlist ID: {playlist.id}</p>
          </Card>
        ))}
        </div>
        <Card>Hello</Card>
    </div>
  );
}

export default App;
