document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Validate form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;

        if (username === '') {
            alert('Please enter your username.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (department === '') {
            alert('Please select your department.');
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});