const formData = {};
const appForms = document.forms[0];
const userName = appForms.elements.username;
const userEmail = appForms.elements.emailaddress;
const message = appForms.elements.message;

const saveUserInfo = () => {
  formData['email'] = userEmail.value;
  formData['username'] = userName.value;
  formData['message'] = message.value;
  localStorageSave('data', JSON.stringify(formData));
}
userEmail.addEventListener('blur', saveUserInfo);
userName.addEventListener('blur', saveUserInfo);
message.addEventListener('blur', saveUserInfo);

const displayUserInfo = () => {
  if(localStorage.getItem('data')) {
    const userInfo = JSON.parse(localStorage.getItem('data'));
    userName.value = userInfo.username;
    userEmail.value = userInfo.email;
    message.value = userInfo.message;
  }
}
displayUserInfo();

const validateEmail = (event) => {
  const emailError = document.querySelector('.form-error');
  
  if (userEmail.value === userEmail.value.toLowerCase()) {
    saveUserInfo();
    appForms.submit();
  } else {
    emailError.textContent = 'Please provide email in lowercase letters';
    emailError.classList.add('d-flex');
    saveUserInfo();
    event.preventDefault();
  } 
};

appForms.addEventListener('submit', validateEmail);
