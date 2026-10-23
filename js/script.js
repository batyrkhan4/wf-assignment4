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


    function showError(input, message) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");

        input.parentElement.querySelector(
            ".invalid-feedback"
        ).textContent = message;
    }


    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }


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


        fields.forEach(function (input) {
            if (!input.value.trim()) {
                showError(input, "This field is required.");
                isValid = false;
            }
        });


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


        if (password.value && password.value.length < 8) {
            showError(
                password,
                "Password must be at least 8 characters long."
            );
            isValid = false;
        }


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

const gradients = [
    "linear-gradient(135deg, #ff758c, #ff7eb3)", 
    "linear-gradient(135deg, #a18cd1, #fbc2eb)", 
    "linear-gradient(135deg, #2193b0, #6dd5ed)",
    "linear-gradient(135deg, #11998e, #38ef7d)", 
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #654ea3, #eaafc8)",
    "linear-gradient(135deg, #0d0f17, #252b45)"
];

let currentGradient = -1;

if (changeThemeBtn) {
    changeThemeBtn.addEventListener("click", function () {
        currentGradient = (currentGradient + 1) % gradients.length;

        document.body.style.backgroundImage =
            gradients[currentGradient];

        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    });
}


// Task 5: Display Current Date and Time

function updateDateTime() {
    const dateTimeElement = document.getElementById("currentDateTime");

    if (dateTimeElement) {
        const now = new Date();

        dateTimeElement.textContent = now.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);