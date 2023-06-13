const dropdown = document.querySelector(".dropdown");
const fixedSidebar = document.querySelector(".fixed-sidebar");
const music = document.getElementById("music");
const musicInfo = document.getElementById("music-info");
let isPlaying = true;
music.volume = 0.1;

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
const imageUrls = [
        "https://media.gq.com.tw/photos/643e5cc4df66094db9bfa2b9/16:9/w_2560%2Cc_limit/Fr7DmemagAAv8CE.jpeg",
        "https://media.gq.com.tw/photos/6444fd49c6e4b308c60f24b5/16:9/w_1280,c_limit/%E3%80%90%E9%96%8B%E7%AE%B1%E3%80%91%E3%80%8A%E6%88%91%E6%8E%A8%E7%9A%84%E5%AD%A9%E5%AD%90%E3%80%8B.jpg",
        "https://imgs.nmplus.hk/wp-content/uploads/2023/04/3hxw8fe_823875664411b4fa29b6.jpeg"
    ];
    const aiImage = document.getElementById("aiImage");
    const interval = 5000;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        aiImage.classList.add("slide-effect");
    setTimeout(() => {
        aiImage.src = imageUrls[currentIndex];
        aiImage.classList.remove("slide-effect");
        }, 500);
    }, interval);