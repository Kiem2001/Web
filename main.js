const song = document.getElementById("song");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".forward");
const prevBtn = document.querySelector(".backward");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".progress");
const timer = setInterval(displayTimer, 500);
const musicName = document.querySelector(".tenbh");
const musicImage = document.querySelector(".anhmusic img");
let isPlaying = true;
let indexSong = 0;
/* let musics = ["Bèo Dạt Mây Trôi.mp3", "Buồn Thì Cứ Khóc.mp3", "có hẹn với thanh xuân.mp3", "Đi Về Nhà.mp3","Gác lại âu lo.mp3","THICHTHICH.mp3","Waka Waka.mp3"]; */
const musics = [
  {
    id: 1,
    title: "Bèo Dạt Mây Trôi",
    file: "Bèo Dạt Mây Trôi.mp3",
    image:
      "/Huce music/homepage/anh/beodatmaytroi.jpg",
  },
  {
    id: 2,
    title: "Buồn Thì Cứ Khóc",
    file: "Buồn Thì Cứ Khóc.mp3",
    image:
      "/Huce music/homepage/anh/anhbh.jpg",
  },
  {
    id: 3,
    title: "có hẹn với thanh xuân",
    file: "có hẹn với thanh xuân.mp3",
    image:
      "/Huce music/homepage/anh/cohenvoitx.jpg",
  },
  {
    id: 4,
    title: "Đi Về Nhà",
    file: "Đi Về Nhà.mp3",
    image:
      "/Huce music/homepage/anh/divenha.jpg",
  },
  {
    id: 5,
    title: "Gác lại âu lo",
    file: "Gác lại âu lo.mp3",
    image:
      "/Huce music/homepage/anh/gaclaiaulo.jpg",
  },
  {
    id: 6,
    title: "THICHTHICH",
    file: "THICHTHICH.mp3",
    image:
      "/Huce music/homepage/anh/thichthich.jpg",
  },
  {
    id: 7,
    title: "Waka Waka",
    file: "Waka Waka.mp3",
    image:
      "/Huce music/homepage/anh/waka.jpg",
  },

];


nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
//next va prev nhac
playBtn.addEventListener("click", playPause);
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  changeSong(1);
}
function changeSong(dir) {
  if (dir === 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    // prev song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  /* song.setAttribute("src", `/playmusic/music/${musics[indexSong].file}`); */
  init(indexSong);
  playPause();

}
//playnhac
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = false;
    timer = setInterval(displayTimer, 1000);
  } else {
    song.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = true;
    clearInterval(timer);
  }
}
//hienthi thoi gian
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes}:${seconds}`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}

function init(indexSong) {
  displayTimer();
  song.setAttribute("src", `/playmusic/music/${musics[indexSong].file}`);
  musicImage.setAttribute("src", musics[indexSong].image);
  musicName.textContent = musics[indexSong].title;
}

init(indexSong);
//chuyển tap option bxh
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tab_name = $$(".name-option-1");
const tab_contents = $$(".content-1");
tab_name.forEach((tab, index) => {
  tab.onclick = function () {
    const tab_content = tab_contents[index];
    $(".name-option-1.active").classList.remove("active");
    $(".content-1.active").classList.remove("active");
    this.classList.add("active");
    tab_content.classList.add("active");
  };
});
//render list


// show song

// let elementBh = document.querySelector('.bai-hat');
// let newMusics = musics;

// const showBh = (musics) => {
//   musics.map(item => {
//     elementBh.insertAdjacentHTML("beforeend",
//       `<div>${item.title}</div>`
//     );
//   })
// }

// showBh(musics);

// let elementSearch = document.querySelector('.search-bai-hat')
// elementSearch.addEventListener("change", (e) => {
//   let key = e.target.value.toLowerCase();
//   console.log('key', key)
//   newMusics = newMusics.filter(item => item.title.toLowerCase().includes(key));
//   showBh(newMusics)
// })

