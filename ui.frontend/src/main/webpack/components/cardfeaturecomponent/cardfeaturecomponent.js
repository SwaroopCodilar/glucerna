 (function() {
    // Function to initialize modal functionality
    function initializeModal(triggerSelector, modalSelector, closeSelector) {
        // Close modal function
        function closeModal(modal) {
            console.log("Closing modal");
            modal.style.display = "none";
            var video = modal.querySelector('video');
            if (video) {
                video.load();
            }
            document.body.classList.remove('no-scroll'); // Enable background scrolling
        }

        // Event listener for modal open
        document.addEventListener('click', function(event) {
            var trigger = event.target.closest(triggerSelector);
            if (!trigger) return;
            var modalId = trigger.getAttribute('data-modal-id');
            console.log(` id ${modalId}`);
            var modal = document.getElementById(modalId);
            console.log("modal"+modal);
            var enablePopup = trigger.getAttribute('data-enablepopup');
            var playButton = modal.querySelector('.play-butn-css');

            if (enablePopup === 'true') {
                event.preventDefault(); // Prevent default action for links
                console.log("Opening modal");
                modal.style.display = "block"; // Display modal
                document.body.classList.add('no-scroll'); // Disable background scrolling

                // Close modal if user clicks outside of it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        closeModal(modal);
                        playButton.style.display = '';
                    }
                };

                // Close modal when close button is clicked
                var closeBtn = modal.querySelector(closeSelector);
                closeBtn.onclick = function() {
                    closeModal(modal);
                    playButton.style.display = '';
                };

                // Additional handling for video modal
                var video = modal.querySelector('video');


                if (video) {
                    video.addEventListener('mouseover', function() {
                        video.controls = true;
                    });

                    video.addEventListener('mouseout', function() {
                        video.controls = false;
                    });

                    playButton.addEventListener('click', function() {
                        playButton.style.display = 'none';
                        video.play();
                    });

                    video.addEventListener('play', function() {
                        playButton.style.display = 'none';
                    });

                    video.addEventListener('pause', function() {
                        if (video.currentTime === 0 || video.currentTime === video.duration) {
                            playButton.style.display = 'block';
                        }
                    });

                    video.addEventListener('ended', function() {
                        playButton.style.display = 'block';
                    });
                }
            } else if (trigger.tagName.toLowerCase() === 'a') {
                // Redirect to PDF path for links if enablepopup is not 'true'
                console.log("Redirecting to PDF path:", trigger.getAttribute('href'));
                window.location.href = trigger.getAttribute('href');
            }
        });
    }

    // Initialize modal functionality for all triggers
    initializeModal(".videoTrigger", ".modal", ".close");
})();