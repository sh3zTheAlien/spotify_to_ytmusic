
const getUserPlaylists = async () => {
    const response = await fetch('http://localhost:5000/');
    const data = await response.json();
    console.log(data);
    return data;
}

export { getUserPlaylists };