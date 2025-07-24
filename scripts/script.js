// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const pwdInput = document.querySelector("#password-input");
const pwdConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event

function removeClass(ele) {
  if (ele) {
    ele.classList.remove("is-valid");
    ele.classList.remove("is-invalid");
  }
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

pwdInput.onkeyup = () => {
  pwdInput.classList.remove("is-valid");
  pwdInput.classList.remove("is-invalid");
};

pwdConfirmInput.onkeyup = () => {
  pwdConfirmInput.classList.remove("is-valid");
  pwdConfirmInput.classList.remove("is-invalid");
};

let isFirstNameOk = false;
let isLastNameOk = false;
let isEmailOk = false;
let isPWD = false;
let isPWDConfirm = false;

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPWD = false;
  isPWDConfirm = false;

  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (pwdInput.value.trim() === "" || pwdInput.value.length < 6) {
    pwdInput.classList.add("is-invalid");
  } else {
    pwdInput.classList.add("is-valid");
    isPWD = true;
  }

  // validate confirm password
  if (
    pwdConfirmInput.value.trim() !== pwdInput.value.trim() ||
    pwdInput.value.length < 6
  ) {
    pwdConfirmInput.classList.add("is-invalid");
  } else {
    pwdConfirmInput.classList.add("is-valid");
    isPWDConfirm = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPWD && isPWDConfirm) {
    alert("Registered successfully");
  }
};

resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  pwdInput.value = "";
  pwdConfirmInput.value = "";

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  pwdInput.classList.remove("is-valid");
  pwdInput.classList.remove("is-invalid");

  pwdConfirmInput.classList.remove("is-valid");
  pwdConfirmInput.classList.remove("is-invalid");
};
// add callback function for Reset button.
