const getSongBySinger = async () => {
    let idSinger = +window.location.search.slice(-1);
    let data = await fetch(`http://localhost:8081/api/singer/listSong/${idSinger}`);
    data = await data.json();

    let imgSinger = data[0].singer.image;
    let nameSinger = data[0].singer.name;
    document.querySelector('.title-img img').src = imgSinger;
    document.querySelector('.title-information p').innerHTML = nameSinger;

    let listSong = document.querySelector('.list-song');
    data.map(item => {
        listSong.insertAdjacentHTML('beforeend',
            `
                <div class="song-item song-item-${item.id}">
                    <div class="song-item-modal">
                        <a href=""><i class="fa-solid fa-circle-play"></i></a>
                    </div>
                    
                    <div class="song">
                        <img src="${item.songImage}" alt="" class="song-img">
                        <div class="song-info">
                            <p class="song-name">${item.name}</p>
                            <a href="" class="song-singer">${item.singer.name}</a>
                        </div>
                    </div>
                    <div class="song-album">
                        <p>Thể loại: ${item.category.name}</p>
                    </div>
                    <div class="song-time">
                        <p>Views: ${item.views}</p>
                    </div>
                </div>
            `
        );
    });


    data.map(item => {
        let song = document.querySelector(`.song-item-${item.id}`);
        song.addEventListener('click', () => {
            document.querySelector('#song').src = item.songLink;
        })
    })

}

getSongBySinger();