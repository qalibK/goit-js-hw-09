const LS_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('.input-email');
const textareaEl = formEl.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', onInput);

populateFormSubmit();

function onFormSubmit(e) {
  e.preventDefault();

  const email = emailInputEl.value.trim();
  const message = textareaEl.value.trim();

  if (email && message) {
    const formData = { email, message };
    localStorage.setItem(LS_KEY, JSON.stringify(formData));

    console.log('Form data from localStorage:', formData);

    formEl.reset();
  } else {
    alert('Please fill in both email and message fields.');
  }
}

function onInput(e) {
  const inputType = e.target === emailInputEl ? 'email' : 'message';
  const value = e.target.value.trim();

  const savedData = getFormDataFromLocalStorage();
  savedData[inputType] = value;

  localStorage.setItem(LS_KEY, JSON.stringify(savedData));
}

function populateFormSubmit() {
  const savedData = getFormDataFromLocalStorage();

  if (savedData.email) {
    emailInputEl.value = savedData.email;
  }

  if (savedData.message) {
    textareaEl.value = savedData.message;
  }
}

function getFormDataFromLocalStorage() {
  const savedData = localStorage.getItem(LS_KEY);
  return savedData ? JSON.parse(savedData) : {};
}

//? Поле для textarea

const inputEl = document.querySelectorAll('.form-input');

inputEl.forEach(function (element) {
  element.addEventListener('focus', function onInputFocus(event) {
    element.setAttribute('placeholder', 'Type area');
  }),
    element.addEventListener('blur', function onInputBlur(event) {
      element.removeAttribute('placeholder');
    });
});
