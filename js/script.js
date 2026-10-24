// Task 1: Form Validation

// Task 1: Form Validation using JavaScript

const form = document.getElementById("registrationForm");

if (form) {
    const ign = document.getElementById("ign");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const discipline = document.getElementById("discipline");
    const experience = document.getElementById("experience");
    const formMessage = document.getElementById("formMessage");

    const fields = [
        ign,
        email,
        password,
        confirmPassword,
        discipline,
        experience
    ];


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

        input.parentElement.querySelector(
            ".invalid-feedback"
        ).textContent = "";
    }


    function clearValidation() {
        fields.forEach(function (input) {
            input.classList.remove("is-invalid", "is-valid");

            input.parentElement.querySelector(
                ".invalid-feedback"
            ).textContent = "";
        });

        formMessage.textContent = "";
        formMessage.className = "mb-3";
    }


    function validateForm() {
        clearValidation();

        let isValid = true;


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

        if (password.value.includes(" ")) {
            showError(
                password,
                "Password must not contain spaces."
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
            fields.forEach(function (input) {
                showSuccess(input);
            });
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
            clearValidation();
        }, 0);
    });
}

// task 2: FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        if (!answer) return;

        const isOpen = question.getAttribute("aria-expanded") === "true";


        faqQuestions.forEach(function (otherQuestion) {
            const otherAnswer = document.getElementById(
                otherQuestion.getAttribute("aria-controls")
            );

            otherQuestion.classList.remove("active");
            otherQuestion.setAttribute("aria-expanded", "false");

            if (otherAnswer) {
                otherAnswer.classList.remove("open");
                otherAnswer.setAttribute("aria-hidden", "true");
            }
        });

        if (!isOpen) {
            question.classList.add("active");
            question.setAttribute("aria-expanded", "true");

            answer.classList.add("open");
            answer.setAttribute("aria-hidden", "false");
        }
    });
});

// task 3: Popup Subscription Form

const subscribeOverlay = document.getElementById("subscribeOverlay");

if (subscribeOverlay) {
    const openSubscribe = document.getElementById("openSubscribe");
    const closeSubscribe = document.getElementById("closeSubscribe");
    const subscribeForm = document.getElementById("subscribeForm");
    const subscribeEmail = document.getElementById("subscribeEmail");
    const subscribeError = document.getElementById("subscribeError");
    const subscribeMessage = document.getElementById("subscribeMessage");

    function openPopup() {
        subscribeOverlay.classList.add("active");
        subscribeOverlay.setAttribute("aria-hidden", "false");
        subscribeEmail.focus();
    }

    function closePopup() {
        subscribeOverlay.classList.remove("active");
        subscribeOverlay.setAttribute("aria-hidden", "true");
        openSubscribe.focus();
    }

    openSubscribe.addEventListener("click", openPopup);
    closeSubscribe.addEventListener("click", closePopup);

    subscribeOverlay.addEventListener("click", function (event) {
        if (event.target === subscribeOverlay) {
            closePopup();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            subscribeOverlay.classList.contains("active")
        ) {
            closePopup();
        }
    });

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = subscribeEmail.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        subscribeError.textContent = "";
        subscribeMessage.textContent = "";

        if (!emailPattern.test(email)) {
            subscribeError.textContent = "Please enter a valid email address.";
            subscribeEmail.focus();
            return;
        }

        subscribeMessage.textContent = "Thank you for subscribing!";
        subscribeForm.reset();
    });

    subscribeEmail.addEventListener("input", function () {
        subscribeError.textContent = "";
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