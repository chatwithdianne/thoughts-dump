// Function to handle form submission and redirect
function submitForm() {
    const message = document.getElementById('message').value;  // Message content
    const email = document.querySelector('input[name="email"]').value;  // Email input value
    const response = document.querySelector('input[name="response"]:checked').value;  // Selected response type
    
    // If no message is entered
    if (message.trim() === '') {
        alert('Please enter some thoughts!');
        return;
    }
    
    // For demonstration purposes, log to the console
    console.log('Message:', message);
    console.log('Email:', email);
    console.log('Response:', response);

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';  // Redirection after form submission
}

// Optional: Automatically show the admin login if needed for testing
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = false; // Replace this with actual login check if needed
    const adminLogin = document.getElementById('adminLogin');
    
    if (isLoggedIn) {
        adminLogin.style.display = 'block';  // Show admin login if logged in
    }
});
