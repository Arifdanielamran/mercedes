document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Validate form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '') {
            alert('Please enter your username.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;     
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        
        // If all validations pass, submit the form
        window.location.href = 'home.html';
    });

});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid username or password');
    }
});