document.getElementById("email").addEventListener("input", function () {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Simple email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailValue.match(emailPattern)) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }

    if (emailValue === "") {
        emailInput.classList.remove("invalid");
        emailInput.classList.remove("valid");
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
    }
});
