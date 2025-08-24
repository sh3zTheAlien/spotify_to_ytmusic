
import { Card } from 'primereact/card';
import { useState, useEffect } from 'react';
import { getUserPlaylists } from './requests';
import { Menubar } from 'primereact/menubar';
function App() {
  const [playlists, setPlaylists] = useState([]);
  
  const fetchPlaylists = async () => {
    const data = await getUserPlaylists();
    setPlaylists(data);
  }

  useEffect(()=>{
    fetchPlaylists();
  },[])
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Menubar model={[{label: 'Home', icon: 'pi pi-fw pi-home'}, {label: 'Playlists', icon: 'pi pi-fw pi-list'}, {label: 'About', icon: 'pi pi-fw pi-info-circle'}]} 
      style={{marginBottom: '1rem', backgroundColor: 'black', color: 'white',height:'2rem'}}/>
      <div className="card-container" 
      style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
        {playlists.map(playlist => (
          <Card key={playlist.id} title={playlist.name} className="playlist-card" 
          style={{backgroundColor: "black", color: "white"}}>
            <p>Playlist ID: {playlist.id}</p>
          </Card>
        ))}
        </div>
    </div>
  );
}

export default App;
