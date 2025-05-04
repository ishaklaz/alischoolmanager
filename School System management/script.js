document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value; // Changed to email
    const password = document.getElementById("password").value;

    if (email === "test@gmail.com" && password === "test") { // Updated email validation
        alert("Login successful!");
        // Redirect to main.html
        window.location.href = "main.html";
    } else {
        alert("Invalid email or password.");
    }
});
