
  
  const allPlaylist = async () => {
    const playlist = await fetch('http://localhost:8081/playlist/topView')
    .then((response) => response.json() // JSON data parsed by `data.json()` call
    ).then(data => {return data});
    const playlistName = document.querySelectorAll('.tenplaylist');
    const playlistImg = document.querySelectorAll('.imgplaylist');
    for(let i = 0; i < playlistName.length; i++) {
        playlistName[i].innerHTML = playlist[i].name;
        playlistImg[i].innerHTML = `<img src=${playlist[i].image} alt="" class="img">`
    }
  }

allPlaylist();
