document.addEventListener('click', function (event) {
    if (event.target.classList.contains('play-button')) {
        var container = event.target.closest('.video-container');
        var video = container.querySelector('video');
        if (video) {
            video.setAttribute('controls', 'controls');
            video.play();
            event.target.style.display = 'none';

            video.addEventListener('play', function () {
                event.target.style.display = 'none';
            });

            video.addEventListener('pause', function () {
                if (video.currentTime === 0 || video.currentTime === video.duration) {
                    event.target.style.display = 'block';
                }
            });

            video.addEventListener('ended', function () {
                event.target.style.display = 'block';
            });
        }
    }
});
