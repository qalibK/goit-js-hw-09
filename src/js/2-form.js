const LS_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const formEmailInput = document.querySelector('.input-email');
const formMessageInput = document.querySelector('.input-message');

formEl.addEventListener('submit', onFormSubmit);
formEmailInput.addEventListener('input', onInput);
formMessageInput.addEventListener('input', onInput);

populateInputFields();

function onFormSubmit(e) {
  e.preventDefault();
  const email = formEmailInput.value.trim();
  const message = formMessageInput.value.trim();

  if (email && message) {
    console.log(getFormDataValue());
    localStorage.removeItem(LS_KEY);
    e.currentTarget.reset();
  } else {
    alert('Please fill all fields');
  }
}

function onInput(e) {
  const email = formEmailInput.value.trim();
  const message = formMessageInput.value.trim();

  const formData = { email, message };
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function getFormDataValue() {
  const savedData = localStorage.getItem(LS_KEY);

  return savedData ? JSON.parse(savedData) : {};
}

function populateInputFields() {
  const savedData = getFormDataValue();

  if (savedData.email) {
    formEmailInput.value = savedData.email;
  }

  if (savedData.message) {
    formMessageInput.value = savedData.message;
  }
}

//? Type area in input

const inputEl = document.querySelectorAll('.form-input');

inputEl.forEach(function (element) {
  element.addEventListener('focus', function onInputFocus(event) {
    element.setAttribute('placeholder', 'Type area');
  }),
    element.addEventListener('blur', function onInputBlur(event) {
      element.removeAttribute('placeholder');
    });
});
