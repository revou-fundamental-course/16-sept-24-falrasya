document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('All fields are required.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const bannerImage = document.querySelector('#banner img');
    bannerImage.style.opacity = 0;
    
    setTimeout(function() {
        bannerImage.style.transition = 'opacity 2s';
        bannerImage.style.opacity = 1;
    }, 1000); // Muncul setelah 1 detik
});
