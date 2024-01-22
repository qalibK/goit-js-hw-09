const inputEl = document.querySelectorAll('.form-input');

inputEl.forEach(function (element) {
  element.addEventListener('focus', function onInputFocus(event) {
    element.setAttribute('placeholder', 'Type area');
  }),
    element.addEventListener('blur', function onInputBlur(event) {
      element.removeAttribute('placeholder');
    });
});

const EMAIL_STORAGE_KEY = 'feedback-form-email';
const MESSAGE_STORAGE_KEY = 'feedback-form-message';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('.input-email');
const textareaEl = formEl.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
emailInputEl.addEventListener('input', onEmailInput);
textareaEl.addEventListener('input', onTextareaInput);

populateFormSubmit();

function onFormSubmit(e) {
  e.preventDefault();

  const email = emailInputEl.value.trim();
  const message = textareaEl.value.trim();

  if (email && message) {
    localStorage.removeItem(EMAIL_STORAGE_KEY);
    localStorage.removeItem(MESSAGE_STORAGE_KEY);

    formEl.reset();
  } else {
      alert('Please fill in both email and message fields.');
  }
}

function onEmailInput(e) {
  const email = e.currentTarget.value.trim();
  localStorage.setItem(EMAIL_STORAGE_KEY, email);
}

function onTextareaInput(e) {
  const message = e.currentTarget.value.trim();

  localStorage.setItem(MESSAGE_STORAGE_KEY, message);
}

function populateFormSubmit() {
  const savedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
  const savedMessage = localStorage.getItem(MESSAGE_STORAGE_KEY);

  if (savedEmail) {
    emailInputEl.value = savedEmail;
  }

  if (savedMessage) {
    textareaEl.value = savedMessage;
  }
}
