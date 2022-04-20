//DOM elements 
const main = document.getElementById("main");
const form = document.getElementById("form");
const modal = document.getElementById("contact_modal");
const contactBtn = document.getElementsByClassName('contact_button');
const closeBtn = document.getElementsByClassName('close_button');
const firstName = document.getElementById("prénom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");


function displayModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('contact_modal--open');
	modal.style.display = "block";
    closeBtn.focus();
}

function closeModal() {
    main.setAttribute('aria-hidden', 'flase');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.toggle('contact_modal--open');
    modal.style.display = "none";
    contactBtn.focus();

    // refresh page (and form) after submitting or closing modal
    setTimeout((windowOff = () => {
        window.location.reload();
    }), 1000);
}

//error style change 
function showErrorBorder(input) {
  input.style.border = '2px solid #e54858';
}

//show validation
function showValidation(input) {
  input.style.border = '2px solid #279e7a';
  input.classList.add('isValid');
};


//prevent from submitting and run input validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
  isFormValid();
})


//inputs validation
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


//regex validation for email
function isEmailValid(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
}


//check that all inputs are valid before submitting
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