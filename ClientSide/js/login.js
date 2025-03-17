document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        window.location.href = 'home.html';
        event.preventDefault();
    });
});