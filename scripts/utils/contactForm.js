//DOM elements 
const main = document.getElementById("main");
const form = document.getElementById("form");
const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("prénom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");


//accessibilité au clavier
document.addEventListener('keyup', onKeyUp);
function onKeyUp(e) {
    if(e.key === 'Escape') {
        closeModal(e);
    }
}


//ESlint rules:
/*exported displayModal*/
/*eslint no-unused-vars: "error"*/
displayModal


/**
* function for opening the modal
*/
function displayModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('contact_modal--open');
	modal.style.display = "block";
}


/**
* function for closing the modal
*/
function closeModal() {
    main.setAttribute('aria-hidden', 'flase');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.toggle('contact_modal--open');
    modal.style.display = "none";

    form.reset();
}

/**
* function changing input style upon error
*/
function showErrorBorder(input) {
  input.style.border = '2px solid #e54858';
}

/**
* function changing input style upon validation
*/
function showValidation(input) {
  input.style.border = '2px solid #279e7a';
  input.classList.add('isValid');
}

/**
* function preventing form submit and starts input validation
*/
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
  isFormValid();
})


/**
* function validating the inputs
*/
function checkInputs() {

    const firstNameValue = firstName.value.trim();
    if (!isNaN(firstNameValue)) {
        showErrorBorder(firstName);
    } else if (firstNameValue.length < 2) {
        showErrorBorder(firstName);
    } else {
        showValidation(firstName);
    }

    const lastNameValue = lastName.value.trim();
    if (!isNaN(lastNameValue)) {
        showErrorBorder(lastName);
    } else if (lastNameValue.length < 2) {
        showErrorBorder(lastName);
    } else {
        showValidation(lastName);
    }

    const emailValue = email.value.trim();
    if (!isEmailValid(emailValue)) {
        showErrorBorder(email);
    } else {
        showValidation(email);
    }

    const messageValue = message.value.trim();
    if (messageValue.length < 2) {
        message.style.border = '2px solid #e54858';
    } else {
        message.style.border = '2px solid #279e7a';
        message.classList.add('isValid');
    }
}


/**
* regex validation for email
*/
function isEmailValid(email) {
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}


/**
* function checking that all inputs are valid before submitting
*/
function isFormValid() {
  if (
    firstName.classList.contains('isValid') &&
    lastName.classList.contains('isValid') &&
    email.classList.contains('isValid') &&
    message.classList.contains('isValid')
  ) {
    console.log('all inputs are valid !')
    
    //close modal after submission
    closeModal();
  }
}