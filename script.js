const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Name validation
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Email validation
function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Password validation
function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Check entire form
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Submit
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});