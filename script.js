
// /*Javascript for master Play*/

// const songArr = [
//     {
//         id: '1',
//         songName: `<div class="song-name c-w">Kesariya</div>
//         <div class="subTitle fs-10">Arijit Singh</div>`,
//         singerName: "Arijit Singh",
//         poster: "Songsimg/1.jpg",
//         name: "Kesariya"

//     }
//     ,
//     {
//         id: '2',
//         songName: `<div class="song-name c-w">Tu Maan Meri Jaan</div>
//         <div class="subTitle fs-10">King</div>`,
//         singerName: "King",
//         poster: "Songsimg/2.jpg",
//         name: "Tu Maan Meri Jaan"

//     }
//     ,
//     {
//         id: '3',
//         songName: `<div class="song-name c-w">Dil Dilan Gallan</div>
//         <div class="subTitle fs-10">Atif Aslam</div>`,
//         singerName: "Atif Aslam",
//         poster: "Songsimg/3.jpg",
//         name: "Dil Dilan Gallan"

//     }
//     ,
//     {
//         id: '4',
//         songName: `<div class="song-name c-w">Jhumme Jo Pathan</div>
//         <div class="subTitle fs-10">Arijit Singh</div>`,
//         singerName: "Arijit Singh",
//         poster: "Songsimg/4.jpg",
//         name: "Jhumme Jo Pathan"

//     }
//     ,
//     {
//         id: '5',
//         songName: `<div class="song-name c-w">Filhaal 2</div>
//         <div class="subTitle fs-10">B Praak</div>`,
//         singerName: "B Praak",
//         poster: "Songsimg/5.jpg",
//         name: "Filhaal 2"

//     }
//     ,
//     {
//         id: '6',
//         songName: `<div class="song-name c-w">Lagti Lahore Di</div>
//         <div class="subTitle fs-10">Guru Randhawa</div>`,
//         singerName: "Guru Randhawa",
//         poster: "Songsimg/6.jpg",
//         name: "Lagti Lahore Di"

//     }
//     ,
//     {
//         id: '7',
//         songName: `<div class="song-name c-w">Let Me Love You</div>
//         <div class="subTitle fs-10">Justin Beiber</div>`,
//         singerName: "Justin Beiber",
//         poster: "Songsimg/7.jpg",
//         name: "Let Me Love You"

//     }
//     ,
//     {
//         id: '8',
//         songName: `<div class="song-name c-w">Despacito</div>
//         <div class="subTitle fs-10">Justin Beiber</div>`,
//         singerName: "Justin Beiber",
//         poster: "Songsimg/8.jpg",
//         name: "Despacito"

//     }
//     ,
//     {
//         id: '9',
//         songName: `<div class="song-name c-w">Eyes Closed</div>
//         <div class="subTitle fs-10">Ed Sheeran</div>`,
//         singerName: "Ed Sheeran",
//         poster: "Songsimg/9.jpg",
//         name: "Eyes Closed"

//     }
//     ,
//     {
//         id: '10',
//         songName: `<div class="song-name c-w">Calm Down</div>
//         <div class="subTitle fs-10">Selena Gomez</div>`,
//         singerName: "Selena Gomez",
//         poster: "Songsimg/10.jpg",
//         name: "Calm Down"

//     }
// ]
// Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
//     element.getElementsByTagName('img')[0].src = songArr[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = songArr[i].songName;
// })
// const song = new Audio('Songs/1.mp3');
// let playSong = document.getElementById('PlaySong');
// let wave = document.getElementById('wave');
// function SongControl() {
//     {
//         if (song.paused || song.currentTime <= 0) {
//             song.play();
//             wave.style.visibility = "visible";
//             wave.classList.add('active1');
//             playSong.classList.remove('fa-play');
//             playSong.classList.add('fa-pause');
//         }
//         else {
//             wave.style.visibility = "hidden";
//             wave.classList.remove('active1');
//             song.pause();
//             playSong.classList.add('fa-play');
//             playSong.classList.remove('fa-pause');
//         }
//     }
// };

// /*Queue Songs */


// /*Making Background of Queue songs change when they start playing*/

// const backgroundChange = () => {
//     Array.from(document.getElementsByClassName('songItem')).forEach((ele) => {
//         ele.style.background = 'rgba(110, 109, 109, 0)';
//     })
// }
// /*Making play-icon of Queue songs change when they start playing*/
// const playiconChange = () => {
//     Array.from(document.getElementsByClassName('play-icon')).forEach((ele) => {
//         ele.classList.add('fa-play');
//         ele.classList.remove('fa-pause');
//     })
// }

// playSong.addEventListener('click', SongControl);

// let songId = 1;
// let masterposter = document.getElementById('poster');
// let songtitle = document.getElementById('song-title');
// let download = document.getElementById('download-music');

// function playSongfunc(ele){
//     songId = ele.target.id;
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;
//     download.href = `Songs/${songId}.mp3`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName, name } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//         ${songName}
//     </marquee>
//     <div class="artist-name">${singerName}</div>
// `;

//         download.setAttribute('download', name);
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// };
// Array.from(document.getElementsByClassName('play-icon')).forEach((e) => {
//     e.addEventListener('click', playSongfunc);
// })


// /*Javascript for seek bar*/
// let currentTime = document.getElementById('currTime');
// let endTime = document.getElementById('endTime');
// let song_bar = document.getElementById('song-bar');
// let movingbar = document.getElementById('bar2');
// let currPosition = document.getElementsByClassName('currPosition')[0];

// song.addEventListener('timeupdate', () => {
//     let song_currTime = song.currentTime;
//     let song_duration = song.duration;

//     let endminutes = Math.floor(song_duration / 60);
//     let endseconds = Math.floor(song_duration % 60);
//     let currminutes = Math.floor(song_currTime / 60);
//     let currseconds = Math.floor(song_currTime % 60);


//     if (currseconds < 10) {
//         currseconds = `0${currseconds}`;
//     }
//     if (endseconds < 10) {
//         endseconds = `0${endseconds}`;
//     }
//     currentTime.innerText = `${currminutes}:${currseconds}`;
//     endTime.innerText = `${endminutes}:${endseconds}`;

//     let progressBar = parseInt((song_currTime / song_duration) * 100,10);
//     song_bar.value = progressBar;
//     let song_bar_value = song_bar.value;
//     movingbar.style.width = `${song_bar_value}%`;
//     currPosition.style.left = `${song_bar_value}%`
// });
// song_bar.addEventListener('change', () => {
//     song.currentTime = song_bar.value * song.duration / 100;
// })
// /*Javascript for changing volume*/
// let volume_icon = document.getElementById('vol-icon');
// let volume = document.getElementById('vol');
// let vol_bar = document.getElementById('volBar');
// let vol_dot = document.getElementById('vol_dot');

// volume.addEventListener('change', () => {
//     if (volume.value == 0) {
//         volume_icon.classList.remove('fa-volume-up');
//         volume_icon.classList.remove('fa-volume-down');
//         volume_icon.classList.add('fa-volume-off');
//     }
//     if (volume.value > 0) {
//         volume_icon.classList.remove('fa-volume-up');
//         volume_icon.classList.remove('fa-volume-off');
//         volume_icon.classList.add('fa-volume-down');
//     }
//     if (volume.value > 50) {
//         volume_icon.classList.remove('fa-volume-down');
//         volume_icon.classList.remove('fa-volume-off');
//         volume_icon.classList.add('fa-volume-up');
//     }
//     let vol_value = volume.value;
//     vol_bar.style.width = `${vol_value}%`;
//     vol_dot.style.left = `${vol_value}%`;

//     song.volume = vol_value / 100;
// });

// /*Javascript to play next aur previous song of the Queue*/
// let previous = document.getElementById('back');
// let next = document.getElementById('next');

// previous.addEventListener('click', () => {
//     songId--;
//     if (songId < 1) {
//         songId = Array.from(document.getElementsByClassName('songItem')).length;
//     }
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//        ${songName}
//    </marquee>
//    <div class="artist-name">${singerName}</div>
// `;
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// })
// next.addEventListener('click', () => {
//     songId++;
//     if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
//         songId = 1;
//     }
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//         ${songName}
//     </marquee>
//     <div class="artist-name">${singerName}</div>
//  `;
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// })
// /*Javascript to move popular artists left and right*/
// let pop_artists_left = document.getElementById('pop_artists_left');
// let pop_artists_right = document.getElementById('pop_artists_right');
// let pop_artists = document.getElementsByClassName('artists')[0];

// pop_artists_right.addEventListener('click', () => {
//     pop_artists.scrollLeft += 70;

// })
// pop_artists_left.addEventListener('click', () => {
//     pop_artists.scrollLeft -= 70;
// })



// let shuffle = document.getElementsByClassName('shuffle')[0];
// shuffle.addEventListener('click', () => {
//     let shuffleinner = shuffle.innerHTML;
//     switch (shuffleinner) {
//         case "next":
//             shuffle.classList.add('fa-repeat');
//             shuffle.classList.remove('fa-random');
//             shuffle.classList.remove('fa-music');
//             shuffle.innerHTML = 'repeat'
//             break;

//         case "repeat":
//             shuffle.classList.add('fa-random');
//             shuffle.classList.remove('fa-repeat');
//             shuffle.classList.remove('fa-music');
//             shuffle.innerHTML = 'random'
//             break;

//         case "random":
//             shuffle.classList.add('fa-music');
//             shuffle.classList.remove('fa-random');
//             shuffle.classList.remove('fa-repeat');
//             shuffle.innerHTML = 'next'
//             break;
//     }
// });
// const next_song = () => {
//     songId++;
//     if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
//         songId = 1;
//     }
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;
//     download.href = `Songs/${songId}.mp3`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName, name } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//         ${songName}
//     </marquee>
//     <div class="artist-name">${singerName}</div>
// `;

//         download.setAttribute('download', name);
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// }

// const repeat_song = () => {
//     songId;
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;
//     download.href = `Songs/${songId}.mp3`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName, name } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//         ${songName}
//     </marquee>
//     <div class="artist-name">${singerName}</div>
// `;

//         download.setAttribute('download', name);
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// }
// const random_song = () => {
//     songId = Math.floor((Math.random() * songArr.length) + 1);
//     if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
//         songId = 1;
//     }
//     song.src = `Songs/${songId}.mp3`;
//     song.play();
//     playSong.classList.remove('fa-play');
//     playSong.classList.add('fa-pause');
//     wave.style.visibility = "visible";
//     wave.classList.add('active1');
//     masterposter.src = `Songsimg/${songId}.jpg`;
//     download.href = `Songs/${songId}.mp3`;

//     let Title = songArr.filter((element) => {
//         return element.id == songId;
//     })
//     Title.forEach((el => {
//         let { songName, singerName, name } = el;
//         songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
//          ${songName}
//      </marquee>
//      <div class="artist-name">${singerName}</div>
//  `;

//         download.setAttribute('download', name);
//     }))

//     backgroundChange();
//     Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";

//     playiconChange();
//     ele.target.classList.remove('fa-play');
//     ele.target.classList.add('fa-pause');
// }
// song.addEventListener('ended',()=>{
//     let icon = shuffle.innerHTML;
//     switch (icon) {
//         case 'next':
//             next_song();
//             break;
//         case 'repeat':
//             repeat_song();
//             break;
//         case 'random':
//             random_song();
//             break;
//     }
// });




/*Javascript for master Play*/

const songArr = [
    {
        id: '1',
        songName: `<div class="song-name c-w">Kesariya</div>
        <div class="subTitle fs-10">Arijit Singh</div>`,
        singerName: "Arijit Singh",
        poster: "Songsimg/1.jpg",
        name: "Kesariya"
  
    }
    ,
    {
        id: '2',
        songName: `<div class="song-name c-w">Tu Maan Meri Jaan</div>
        <div class="subTitle fs-10">King</div>`,
        singerName: "King",
        poster: "Songsimg/2.jpg",
        name: "Tu Maan Meri Jaan"
  
    }
    ,
    {
        id: '3',
        songName: `<div class="song-name c-w">Dil Dilan Gallan</div>
        <div class="subTitle fs-10">Atif Aslam</div>`,
        singerName: "Atif Aslam",
        poster: "Songsimg/3.jpg",
        name: "Dil Dilan Gallan"
  
    }
    ,
    {
        id: '4',
        songName: `<div class="song-name c-w">Jhumme Jo Pathan</div>
        <div class="subTitle fs-10">Arijit Singh</div>`,
        singerName: "Arijit Singh",
        poster: "Songsimg/4.jpg",
        name: "Jhumme Jo Pathan"
  
    }
    ,
    {
        id: '5',
        songName: `<div class="song-name c-w">Filhaal 2</div>
        <div class="subTitle fs-10">B Praak</div>`,
        singerName: "B Praak",
        poster: "Songsimg/5.jpg",
        name: "Filhaal 2"
  
    }
    ,
    {
        id: '6',
        songName: `<div class="song-name c-w">Lagti Lahore Di</div>
        <div class="subTitle fs-10">Guru Randhawa</div>`,
        singerName: "Guru Randhawa",
        poster: "Songsimg/6.jpg",
        name: "Lagti Lahore Di"
  
    }
    ,
    {
        id: '7',
        songName: `<div class="song-name c-w">Let Me Love You</div>
        <div class="subTitle fs-10">Justin Beiber</div>`,
        singerName: "Justin Beiber",
        poster: "Songsimg/7.jpg",
        name: "Let Me Love You"
  
    }
    ,
    {
        id: '8',
        songName: `<div class="song-name c-w">Despacito</div>
        <div class="subTitle fs-10">Justin Beiber</div>`,
        singerName: "Justin Beiber",
        poster: "Songsimg/8.jpg",
        name: "Despacito"
  
    }
    ,
    {
        id: '9',
        songName: `<div class="song-name c-w">Eyes Closed</div>
        <div class="subTitle fs-10">Ed Sheeran</div>`,
        singerName: "Ed Sheeran",
        poster: "Songsimg/9.jpg",
        name: "Eyes Closed"
  
    }
    ,
    {
        id: '10',
        songName: `<div class="song-name c-w">Calm Down</div>
        <div class="subTitle fs-10">Selena Gomez</div>`,
        singerName: "Selena Gomez",
        poster: "Songsimg/10.jpg",
        name: "Calm Down"
  
    }
  ]
  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songArr[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songArr[i].songName;
  })
  const song = new Audio('Songs/1.mp3');
  let playSong = document.getElementById('PlaySong');
  let wave = document.getElementById('wave');
  function SongControl() {
    
        if (song.paused || song.currentTime <= 0) {
            song.play();
            wave.style.visibility = "visible";
            wave.classList.add('active1');
            playSong.classList.remove('fa-play');
            playSong.classList.add('fa-pause');
        }
        else {
            wave.style.visibility = "hidden";
            wave.classList.remove('active1');
            song.pause();
            playSong.classList.add('fa-play');
            playSong.classList.remove('fa-pause');
        }
    
  };
  
  /*Queue Songs */
  
  
  /*Making Background of Queue songs change when they start playing*/
  
  const backgroundChange = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((ele) => {
        ele.style.background = 'rgba(110, 109, 109, 0)';
    })
  }
  /*Making play-icon of Queue songs change when they start playing*/
  const playiconChange = () => {
    Array.from(document.getElementsByClassName('play-icon')).forEach((ele) => {
        ele.classList.add('fa-play');
        ele.classList.remove('fa-pause');
    })
  }
  
  playSong.addEventListener('click', SongControl);
  
  let songId = 1;
  let masterposter = document.getElementById('poster');
  let songtitle = document.getElementById('song-title');
  let download = document.getElementById('download-music');
  
  function playSongfunc(ele){
    songId = ele.target.id;
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
    download.href = `Songs/${songId}.mp3`;
  
    let Title = songArr.filter((element) => {
        return element.id === songId;
    })
    Title.forEach((el => {
        let { songName, singerName, name } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
        ${songName}
    </marquee>
    <div class="artist-name">${singerName}</div>
  `;
  
        download.setAttribute('download', name);
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  };
  Array.from(document.getElementsByClassName('play-icon')).forEach((e) => {
    e.addEventListener('click', playSongfunc);
  })
  
  
  /*Javascript for seek bar*/
  let currentTime = document.getElementById('currTime');
  let endTime = document.getElementById('endTime');
  let song_bar = document.getElementById('song-bar');
  let movingbar = document.getElementById('bar2');
  let currPosition = document.getElementsByClassName('currPosition')[0];
  
  song.addEventListener('timeupdate', () => {
    let song_currTime = song.currentTime;
    let song_duration = song.duration;
  
    let endminutes = Math.floor(song_duration / 60);
    let endseconds = Math.floor(song_duration % 60);
    let currminutes = Math.floor(song_currTime / 60);
    let currseconds = Math.floor(song_currTime % 60);
  
  
    if (currseconds < 10) {
        currseconds = `0${currseconds}`;
    }
    if (endseconds < 10) {
        endseconds = `0${endseconds}`;
    }
    currentTime.innerText = `${currminutes}:${currseconds}`;
    endTime.innerText = `${endminutes}:${endseconds}`;
  
    let progressBar = parseInt((song_currTime/song_duration)* 100,10);
    song_bar.value = progressBar;
    let song_bar_value = song_bar.value;
    movingbar.style.width = `${song_bar_value}%`;
    currPosition.style.left = `${song_bar_value}%`
  });
  song_bar.addEventListener('change', () => {
    song.currentTime = song_bar.value * song.duration / 100;
  })
  /*Javascript for changing volume*/
  let volume_icon = document.getElementById('vol-icon');
  let volume = document.getElementById('vol');
  let vol_bar = document.getElementById('volBar');
  let vol_dot = document.getElementById('vol_dot');
  
  volume.addEventListener('change', () => {
    if (volume.value === 0) {
        volume_icon.classList.remove('fa-volume-up');
        volume_icon.classList.remove('fa-volume-down');
        volume_icon.classList.add('fa-volume-off');
    }
    if (volume.value > 0) {
        volume_icon.classList.remove('fa-volume-up');
        volume_icon.classList.remove('fa-volume-off');
        volume_icon.classList.add('fa-volume-down');
    }
    if (volume.value > 50) {
        volume_icon.classList.remove('fa-volume-down');
        volume_icon.classList.remove('fa-volume-off');
        volume_icon.classList.add('fa-volume-up');
    }
    let vol_value = volume.value;
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left = `${vol_value}%`;
  
    song.volume = vol_value / 100;
  });
  
  /*Javascript to play next aur previous song of the Queue*/
  let previous = document.getElementById('back');
  let next = document.getElementById('next');
  
  previous.addEventListener('click', (ele) => {
    songId--;
    if (songId < 1) {
        songId = Array.from(document.getElementsByClassName('songItem')).length;
    }
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
  
    let Title = songArr.filter((element) => {
        return element.id === songId;
    })
    Title.forEach((el => {
        let { songName, singerName } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
       ${songName}
   </marquee>
   <div class="artist-name">${singerName}</div>
  `;
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  })
  next.addEventListener('click', (ele) => {
    songId++;
    if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
        songId = 1;
    }
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
  
    let Title = songArr.filter((element) => {
        return element.id === songId;
    })
    Title.forEach((el => {
        let { songName, singerName } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
        ${songName}
    </marquee>
    <div class="artist-name">${singerName}</div>
  `;
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  })
  /*Javascript to move popular artists left and right*/
  let pop_artists_left = document.getElementById('pop_artists_left');
  let pop_artists_right = document.getElementById('pop_artists_right');
  let pop_artists = document.getElementsByClassName('artists')[0];
  
  pop_artists_right.addEventListener('click', () => {
    pop_artists.scrollLeft += 70;
  
  })
  pop_artists_left.addEventListener('click', () => {
    pop_artists.scrollLeft -= 70;
  })
  
  
  
  let shuffle = document.getElementsByClassName('shuffle')[0];
  shuffle.addEventListener('click', () => {
    let shuffleinner = shuffle.innerHTML;
    switch (shuffleinner){
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-random');
            shuffle.classList.remove('fa-music');
            shuffle.innerHTML = 'repeat'
            break;
  
        case "repeat":
            shuffle.classList.add('fa-random');
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.innerHTML = 'random'
            break;
  
        case "random":
            shuffle.classList.add('fa-music');
            shuffle.classList.remove('fa-random');
            shuffle.classList.remove('fa-repeat');
            shuffle.innerHTML = 'next'
            break;
        default:
          break;
    }
  });
  const next_song = (ele) => {
    songId++;
    if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
        songId = 1;
    }
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
    download.href = `Songs/${songId}.mp3`;
  
    let Title = songArr.filter((element) => {
        return element.id ===  songId;
    })
    Title.forEach((el => {
        let { songName, singerName, name } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
        ${songName}
    </marquee>
    <div class="artist-name">${singerName}</div>
  `;
  
        download.setAttribute('download', name);
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  }
  
  const repeat_song = (ele) => {
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
    download.href = `Songs/${songId}.mp3`;
  
    let Title = songArr.filter((element) => {
        return element.id === songId;
    })
    Title.forEach((el => {
        let { songName, singerName, name } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
        ${songName}
    </marquee>
    <div class="artist-name">${singerName}</div>
  `;
  
        download.setAttribute('download', name);
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  }
  const random_song = (ele) => {
    songId = Math.floor((Math.random() * songArr.length) + 1);
    if (songId > Array.from(document.getElementsByClassName('songItem')).length) {
        songId = 1;
    }
    song.src = `Songs/${songId}.mp3`;
    song.play();
    playSong.classList.remove('fa-play');
    playSong.classList.add('fa-pause');
    wave.style.visibility = "visible";
    wave.classList.add('active1');
    masterposter.src = `Songsimg/${songId}.jpg`;
    download.href = `Songs/${songId}.mp3`;
  
    let Title = songArr.filter((element) => {
        return element.id ===  songId;
    })
    Title.forEach((el => {
        let { songName, singerName, name } = el;
        songtitle.innerHTML = `<marquee width="90%" direction="left" height="15px" style="font-weight: 600; font-size: 10px;">
         ${songName}
     </marquee>
     <div class="artist-name">${singerName}</div>
  `;
  
        download.setAttribute('download', name);
    }))
  
    backgroundChange();
    Array.from(document.getElementsByClassName('songItem'))[songId - 1].style.background = "rgba(110, 109, 109, .4)";
  
    playiconChange();
    ele.target.classList.remove('fa-play');
    ele.target.classList.add('fa-pause');
  }
  song.addEventListener('ended',()=>{
    let icon = shuffle.innerHTML;
    switch (icon) {
        case 'next':
            next_song();
            break;
        case 'repeat':
            repeat_song();
            break;
        case 'random':
            random_song();
            break;
        default:
            break;
  
    }
  });
  
  