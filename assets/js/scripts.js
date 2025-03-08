// Show email field and reassurance message if anonymous checkbox is not checked
document.getElementById("anonymous").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("email").style.display = "none";
        document.getElementById("emailLabel").style.display = "none";
        document.getElementById("emailReassurance").style.display = "none";
    } else {
        document.getElementById("email").style.display = "block";
        document.getElementById("emailLabel").style.display = "block";
        document.getElementById("emailReassurance").style.display = "block";
    }
});

// Redirect to the confirmation page after the form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way
    window.location.href = "confirmation.html"; // Redirect to confirmation page
});
