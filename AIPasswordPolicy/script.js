// script.js

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength");

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        const strength = analyzePasswordStrength(password);
        displayPasswordStrength(strength);
    });

    document.getElementById("password-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const password = passwordInput.value;
        const strength = analyzePasswordStrength(password);

        if (strength === "Strong") {
            // Submit the form
            alert("Password is strong. Form submitted.");
            document.getElementById("password-form").reset();
        } else {
            alert("Password does not meet the strength requirements.");
        }
    });

    function analyzePasswordStrength(password) {
        // Implement your password strength analysis logic here
        // You can return a string like "Weak," "Medium," or "Strong"
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

        if (password.length < minLength) {
            return "Weak";
        }

        if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
            return "Strong";
        }

        return "Medium";
    }

    function displayPasswordStrength(strength) {
        passwordStrength.textContent = `Password Strength: ${strength}`;
    }
});