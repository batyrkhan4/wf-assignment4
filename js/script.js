// Task 1: Form Validation

const form = document.getElementById("registrationForm");

if (form) {
    const ign = document.getElementById("ign");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const discipline = document.getElementById("discipline");
    const experience = document.getElementById("experience");
    const formMessage = document.getElementById("formMessage");

    // Show error message
    function showError(input, message) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");

        input.parentElement.querySelector(
            ".invalid-feedback"
        ).textContent = message;
    }

    // Mark field as valid
    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

    // Validate all fields
    function validateForm() {
        let isValid = true;

        const fields = [
            ign,
            email,
            password,
            confirmPassword,
            discipline,
            experience
        ];

        fields.forEach(function (input) {
            input.classList.remove("is-invalid", "is-valid");

            input.parentElement.querySelector(
                ".invalid-feedback"
            ).textContent = "";
        });

        formMessage.textContent = "";
        formMessage.className = "mb-3";

        // Check required fields
        fields.forEach(function (input) {
            if (!input.value.trim()) {
                showError(input, "This field is required.");
                isValid = false;
            }
        });

        // Check email format
        if (email.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {
                showError(
                    email,
                    "Please enter a valid email address."
                );
                isValid = false;
            }
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

        // Mark all fields as valid
        if (isValid) {
            fields.forEach(showSuccess);
        }

        return isValid;
    }

    // Handle form submission
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

    // Reset form and validation messages
    form.addEventListener("reset", function () {
        setTimeout(function () {
            form.querySelectorAll(".is-valid, .is-invalid")
                .forEach(function (input) {
                    input.classList.remove(
                        "is-valid",
                        "is-invalid"
                    );
                });

            form.querySelectorAll(".invalid-feedback")
                .forEach(function (message) {
                    message.textContent = "";
                });

            formMessage.textContent = "";
            formMessage.className = "mb-3";
        }, 0);
    });
}

// task 3: Popup Subscription Form
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
    const subscribeEmail = document.getElementById("subscribeEmail");
    const subscribeMessage = document.getElementById("subscribeMessage");

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(subscribeEmail.value.trim())) {
            subscribeEmail.classList.add("is-invalid");
            subscribeEmail.classList.remove("is-valid");
            subscribeMessage.textContent = "";
            return;
        }

        subscribeEmail.classList.remove("is-invalid");
        subscribeEmail.classList.add("is-valid");

        subscribeMessage.textContent =
            "Thank you for subscribing!";
        subscribeMessage.className = "mt-3 mb-0 text-success";

        subscribeForm.reset();
        subscribeEmail.classList.remove("is-valid");
    });

    subscribeEmail.addEventListener("input", function () {
        subscribeEmail.classList.remove("is-invalid");
        subscribeMessage.textContent = "";
    });
}

//task 4: Change Background Color
const changeThemeBtn = document.getElementById("changeThemeBtn");

if (changeThemeBtn) {
    changeThemeBtn.addEventListener("click", function () {
        const colors = ["#f0f8ff", "#e8f5e9", "#fff3e0", "#f3e5f5"];

        const randomIndex = Math.floor(Math.random() * colors.length);

        document.body.style.backgroundColor = colors[randomIndex];
    });
}