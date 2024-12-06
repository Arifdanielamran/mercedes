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

        // If all validations pass, submit the form
        form.submit();
    });
});