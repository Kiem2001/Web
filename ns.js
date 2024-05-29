
  
  const allNs = async () => {
    const listNs = await fetch('http://localhost:8081/api/singer/all')
    .then((response) => response.json() // JSON data parsed by `data.json()` call
    ).then(data => {return data});
    const nsName = document.querySelectorAll('.album-name');
    const nsImg = document.querySelectorAll('.album-img');
    const url = document.querySelectorAll('.album-item .click-album');

    for(let i = 0; i < nsName.length; i++) {
        nsName[i].innerHTML = listNs[i].name;
        nsImg[i].innerHTML = `<img src=${listNs[i].image} alt="">`;
        let href = url[i].getAttribute('href');
        href += `?id=${listNs[i].id}`;
        url[i].setAttribute('href', href);
    }
  }

allNs();


// const getSongBySinger = async () => {
//   let data = await fetch(`http://localhost:8081/api/singer/listSong/1`);
//   data = await data.json();

//   console.log('data', data);
// }

// getSongBySinger();