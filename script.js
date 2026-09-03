const music = document.getElementById("backgroundMusic");

music.volume = 0;

function fadeInMusic() {
    music.play().then(() => {
        let volume = 0;

        const fade = setInterval(() => {
            volume += 0.01;
            music.volume = Math.min(volume, 0.18);

            if (volume >= 0.18) {
                clearInterval(fade);
            }
        }, 80);
    }).catch(error => {
        console.log("Audio playback blocked:", error);
    });
}

document.addEventListener("click", fadeInMusic, { once: true });


