function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('2024-12-21T20:30:00');

    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var icon = document.getElementById('audio-icon');

    icon.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icon.classList.remove('bi-play-circle-fill');
            icon.classList.add('bi-stop-circle-fill');
        } else {
            audio.pause();
            icon.classList.remove('bi-stop-circle-fill');
            icon.classList.add('bi-play-circle-fill');
        }
    });

    // Cambiar el icono si la música está en reproducción cuando se carga la página
    audio.addEventListener('play', function() {
        icon.classList.remove('bi-play-circle-fill');
        icon.classList.add('bi-stop-circle-fill');
    });

    audio.addEventListener('pause', function() {
        icon.classList.remove('bi-stop-circle-fill');
        icon.classList.add('bi-play-circle-fill');
    });
});