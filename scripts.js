document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playlistItems = document.querySelectorAll(".playlist li");
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const songTitle = document.getElementById("song-title");

    let currentSongIndex = -1;

    function playSong(index) {
        if (index >= 0 && index < playlistItems.length) {
            // حذف کلاس active از همه آیتم‌های پلی لیست
            playlistItems.forEach(i => i.classList.remove("active"));
            // اضافه کردن کلاس active به آیتم در حال پخش
            playlistItems[index].classList.add("active");
            // تغییر عنوان آهنگ
            songTitle.textContent = playlistItems[index].getAttribute("data-title");
            // پخش آهنگ
            audioPlayer.src = playlistItems[index].getAttribute("data-src");
            audioPlayer.play();
            currentSongIndex = index;
        }
    }

    playlistItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            playSong(index);
        });
    });

    playButton.addEventListener("click", function() {
        if (currentSongIndex !== -1) {
            audioPlayer.play();
        }
    });

    pauseButton.addEventListener("click", function() {
        audioPlayer.pause();
    });

    prevButton.addEventListener("click", function() {
        if (currentSongIndex > 0) {
            playSong(currentSongIndex - 1);
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentSongIndex < playlistItems.length - 1) {
            playSong(currentSongIndex + 1);
        }
    });
});

