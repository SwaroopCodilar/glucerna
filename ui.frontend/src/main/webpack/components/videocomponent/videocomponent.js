   document.getElementById('playButton').addEventListener('click', function () {
        var video = document.getElementById('myVideo');
        video.setAttribute('controls', 'controls');
        video.play();
        this.style.display = 'none';
    });

    document.getElementById('myVideo').addEventListener('play', function () {
        document.getElementById('playButton').style.display = 'none';
    });

    document.getElementById('myVideo').addEventListener('pause', function () {
        var video = document.getElementById('myVideo');
        if(video.currentTime === 0 || video.currentTime === video.duration) {
            document.getElementById('playButton').style.display = 'block';
        }
    });

    document.getElementById('myVideo').addEventListener('ended', function () {
        document.getElementById('playButton').style.display = 'block';
    });