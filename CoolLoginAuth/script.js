document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUser = { username: "yourusername", password: "yourpassword" };

    if (username === validUser.username && password === validUser.password) {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "#4CAF50";
    } else {
        document.getElementById("message").textContent = "Login failed. Please check your credentials.";
        document.getElementById("message").style.color = "#FF5722";
    }
});
