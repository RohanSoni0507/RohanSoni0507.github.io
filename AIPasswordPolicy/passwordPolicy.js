// passwordPolicy.js

/**
 * Check if a password meets the defined policy.
 * @param {string} password - The password to be checked.
 * @returns {boolean} - True if the password meets the policy, false otherwise.
 */
function isPasswordValid(password) {
    // Define your password policy rules here
    const minLength = 8; // Minimum password length
    const hasUppercase = /[A-Z]/.test(password); // Check for at least one uppercase letter
    const hasLowercase = /[a-z]/.test(password); // Check for at least one lowercase letter
    const hasDigit = /[0-9]/.test(password); // Check for at least one digit
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password); // Check for at least one special character

    // Check if the password meets all policy rules
    return (
        password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar
    );
}

module.exports = {
    isPasswordValid,
};