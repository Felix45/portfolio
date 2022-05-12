const appForms = document.forms[0];
const userEmail = appForms.elements.emailaddress;

const validateEmail = (event) => {
  const emailError = document.querySelector('.form-error');
  if (userEmail.value === userEmail.value.toLowerCase()) {
    appForms.submit();
  }
  emailError.textContent = 'Please provide email in lowercase letters';
  emailError.classList.add('d-flex');
  event.preventDefault();
};

appForms.addEventListener('submit', validateEmail);