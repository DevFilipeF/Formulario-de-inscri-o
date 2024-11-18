document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector(".cadastro");
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const lastName = document.querySelector('input[placeholder="Last Name"]');
    const email = document.querySelector('input[placeholder="Email address"]');
    const password = document.querySelector('input[placeholder="Password"]');
    const submitButton = document.querySelector(".botao");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        resetErrorMessages();

        let isValid = true;

        if (firstName.value.trim() === "") {
            displayError(firstName, "First Name cannot be empty");
            isValid = false;
        }

        if (lastName.value.trim() === "") {
            displayError(lastName, "Last Name cannot be empty");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            displayError(email, "Please enter a valid email address");
            email.placeholder = "email@example/com";
            email.color = "red";
            isValid = false;
        }

        if (password.value.trim() === "") {
            displayError(password, "Password cannot be empty");
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function displayError(inputElement, message) {
        const errorElement = document.createElement("p");
        errorElement.className = "error";
        errorElement.innerText = message;
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);

        inputElement.style.borderColor = "red";

        const errorIcon = inputElement.parentNode.querySelector('.error-icon');
        if (errorIcon) {
            errorIcon.classList.remove("invisible");
        }
    }

    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll(".error");
        errorMessages.forEach(error => error.remove());

        const inputs = document.querySelectorAll(".cadastro input");
        inputs.forEach(input => input.style.borderColor = "");

        const errorIcons = document.querySelectorAll(".error-icon");
        errorIcons.forEach(icon => icon.classList.add("invisible"));

        email.placeholder = "Email address";
        email.style.color = "";
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
