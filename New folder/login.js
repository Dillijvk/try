function authenticate() {
    // Get the input values and trim and convert to lowercase
    var usernameInput = document.getElementById("username").value.trim().toLowerCase();
    var passwordInput = document.getElementById("password").value.trim();
    
    // Replace these with your actual username and password
    var correctUsername = "noodels";
    var correctPassword = "3112001";
    
    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // Redirect to the specified page (replace 'targetpage.html' with the desired URL)
        window.location.href = "letter.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}