const dropdown = document.querySelector(".dropdown");
const fixedSidebar = document.querySelector(".fixed-sidebar");
const music = document.getElementById("music");
const musicInfo = document.getElementById("music-info");
let isPlaying = true;
music.volume = 0.2;

dropdown.addEventListener("mouseover", function () {
    const dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
});

dropdown.addEventListener("mouseout", function () {
    const dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.style.maxHeight = "0";
});

fixedSidebar.addEventListener("click", function () {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        music.currentTime = 0;
    } else {
        music.play();
        isPlaying = true;
    }
});
music.addEventListener("ended", function() {
    music.currentTime = 0;
});
function showMusicInfo() {
    musicInfo.style.display = "block";
    setTimeout(hideMusicInfo, 5000);
}
function hideMusicInfo() {
    musicInfo.style.display = "none";
}
music.addEventListener("play", showMusicInfo);
function handleHover() {
    if (isPlaying) {
        document.getElementById("music").play();
    }
}
function showMusicInfo() {
    musicInfo.style.display = "block";
    setTimeout(hideMusicInfo, 5000);
}
function hideMusicInfo() {
    musicInfo.style.display = "none";
}
music.addEventListener("play", showMusicInfo);