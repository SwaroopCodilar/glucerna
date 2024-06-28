const ham = document.getElementById('hamburger');
ham.addEventListener('click', () => {
    ham.parentElement.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', function() {

    //const closeBtn = document.getElementById("hello-id img");
    const hamburgerImage = document.querySelector('.hamburger-bar-image');
    const crossImage = document.querySelector('.hamburger-bar-cross');

    hamburgerImage.addEventListener('click', function() {
        hamburgerImage.style.display = 'none';
        crossImage.style.display = 'block';
    });
    crossImage.addEventListener('click', function() {
        crossImage.style.display = 'none';
        hamburgerImage.style.display = 'block';
    });
});
