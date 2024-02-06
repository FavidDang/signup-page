function addError() {

    if (password.classList.contains("error")) {
        return;
    }

    const passwordContainer = password.parentElement;
    const passwordConfirmContainer = passwordConfirm.parentElement;

    password.classList.add("error");
    passwordConfirm.classList.add("error");

    const passwordError = document.createElement("span");
    const passwordConfirmError = document.createElement("span");

    passwordError.innerHTML = "* Passwords do not match";
    passwordConfirmError.innerHTML = "*";
    passwordError.style.color = "red";
    passwordConfirmError.style.color = "red";

    passwordContainer.appendChild(passwordError);
    passwordConfirmContainer.appendChild(passwordConfirmError);
}

function submitForm(event) {
    if (password.value === passwordConfirm.value) {
        console.log("Password same, submitted form");
    } else {
        console.log("Password not same, form not submitted");
        addError();
        event.preventDefault();
    }
}

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm_password");
const form = document.querySelector("form");

form.addEventListener("submit", submitForm);
