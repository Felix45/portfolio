const formData = {};
const appForms = document.forms[0];
const inputFields = document.querySelectorAll('.userdata');
const { username, emailaddress, message } = appForms.elements;

const localStorageSave = (itemKey, ItemValue) => {
  localStorage.setItem(itemKey, ItemValue);
};

const saveUserInfo = () => {
  formData.email = emailaddress.value;
  formData.username = username.value;
  formData.message = message.value;
  localStorageSave('data', JSON.stringify(formData));
};
inputFields.forEach((el) => { el.addEventListener('blur', saveUserInfo); });

const displayUserInfo = () => {
  if (localStorage.getItem('data')) {
    const userInfo = JSON.parse(localStorage.getItem('data'));
    username.value = userInfo.username;
    emailaddress.value = userInfo.email;
    message.value = userInfo.message;
  }
};
displayUserInfo();

const validateEmail = (event) => {
  const emailError = document.querySelector('.form-error');
  saveUserInfo();
  if (emailaddress.value === emailaddress.value.toLowerCase()) {
    appForms.submit();
  } else {
    emailError.textContent = 'Please provide email in lowercase letters';
    emailError.classList.add('d-flex');
    event.preventDefault();
  }
};

appForms.addEventListener('submit', validateEmail);
