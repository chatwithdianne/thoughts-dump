// Form submission handling and redirection to confirmation page
function submitForm() {
    const message = document.getElementById('message').value;
    const email = document.querySelector('input[name="email"]').value;
    const response = document.querySelector('input[name="response"]:checked').value;

    if (message.trim() === '') {
        alert('Please enter some thoughts!');
        return;
    }

    // Save the data, maybe in a database or session, or handle it as needed
    console.log('Message:', message);
    console.log('Email:', email);
    console.log('Response:', response);

    // Redirect to confirmation page
    window.location.href = 'confirmation.html'; // Redirect to the confirmation page
}
