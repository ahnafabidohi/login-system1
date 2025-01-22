document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password!");
    }
});
