//lista faixa pokemon
const tracks = [
    {
        title: "Mimikyu Theme",
        subtitle: "Type: Ghost/Fairy",
        scr: "audio/Mimikyu.mp3",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"

    },
    {
        title: "Phantump Theme",
        subtitle: "Type: Ghost/Grass",
        scr: "audio/Phantump.mp3",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png"
    },
    {
        title: "Gothitelle Theme",
        subtitle: "Type: Psychic",
        scr: "audio/Gothitelle.mp3",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png"

    }
];

const audio = document.getElementById("audio");
const titleEl = document.getElementById("track-title");
const subtitleEl = document.getElementById("track-subtitle");
const imgEl = document.getElementById("pokemon-img");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  titleEl.textContent = track.title;
  subtitleEl.textContent = track.subtitle;
  imgEl.src = track.img;
  progressEl.value = 0;
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60) || 0;
    const s = Math.floor(seconds / 60) || 0;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

function playTrack() {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸"
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
})

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressEl.value = percent;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

progressEl.addEventListener("input", () => {
  if (audio.duration) {
    const newTime = (progressEl.value / 100) * audio.duration;
    audio.currentTime = newTime;
  }
});

audio.addEventListener("ended", () => {
    nextBtn.click();
});

//carrega primeira faixa ao iniciar
loadTrack(currentIndex);