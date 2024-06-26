document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const phone = document.getElementById('phone').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const email = document.getElementById('email').value;

    // Simple validation check
    if(name && branch && semester && phone && studentNumber && email) {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, branch, semester, phone, studentNumber, email })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerText = data.message;
        })
        .catch(error => {
            document.getElementById('message').innerText = 'An error occurred. Please try again.';
            console.error('Error:', error);
        });
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }

    // Clear the form
    document.getElementById('registrationForm').reset();
});
