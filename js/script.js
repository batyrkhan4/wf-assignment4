// 1 task
const form = document.getElementById("registrationForm");

if (form) {
    const ign = document.getElementById("ign");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword =
        document.getElementById("confirmPassword");
    const discipline = document.getElementById("discipline");
    const experience = document.getElementById("experience");
    const formMessage = document.getElementById("formMessage");

    function showError(input, message) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");

        const feedback = input.parentElement
            .querySelector(".invalid-feedback");

        feedback.textContent = message;
    }

    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

    function validateForm() {
        let isValid = true;

        const fields = [
            ign, email, password,
            confirmPassword, discipline, experience
        ];

        fields.forEach(input => {
            input.classList.remove("is-invalid", "is-valid");
            input.parentElement.querySelector(
                ".invalid-feedback"
            ).textContent = "";
        });

        formMessage.textContent = "";
        formMessage.className = "mb-3";

        // Check required fields
        fields.forEach(input => {
            if (!input.value.trim()) {
                showError(input, "This field is required.");
                isValid = false;
            }
        });

        // Check email format
        if (email.value.trim() && !email.validity.valid) {
            showError(email, "Please enter a valid email address.");
            isValid = false;
        }

        // Check password length
        if (password.value && password.value.length < 8) {
            showError(
                password,
                "Password must be at least 8 characters long."
            );
            isValid = false;
        }

        // Check password confirmation
        if (
            confirmPassword.value &&
            password.value !== confirmPassword.value
        ) {
            showError(
                confirmPassword,
                "Passwords do not match."
            );
            isValid = false;
        }


        if (isValid) {
            fields.forEach(showSuccess);
        }

        return isValid;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            formMessage.textContent =
                "Validation successful! Your form is ready.";
            formMessage.classList.add("text-success");
        } else {
            formMessage.textContent =
                "Please correct the errors above.";
            formMessage.classList.add("text-danger");
        }
    });

    form.addEventListener("reset", function () {
        setTimeout(() => {
            form.querySelectorAll(".is-valid, .is-invalid")
                .forEach(input => {
                    input.classList.remove("is-valid", "is-invalid");
                });

            form.querySelectorAll(".invalid-feedback")
                .forEach(message => {
                    message.textContent = "";
                });

            formMessage.textContent = "";
            formMessage.className = "mb-3";
        }, 0);
    });
}