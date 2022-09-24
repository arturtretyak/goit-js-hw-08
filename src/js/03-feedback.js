import Storage from './storage';

let throttle = require('lodash.throttle');

const KEY_OBJECT_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const savedData = Storage.load(KEY_OBJECT_FORM);

if (savedData) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('input', throttle(inputHandler, 500));

function inputHandler(event) {
  const newData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  Storage.save(KEY_OBJECT_FORM, newData);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(Storage.load(KEY_OBJECT_FORM));
  form.elements.email.value = '';
  form.elements.message.value = '';
  Storage.remove(KEY_OBJECT_FORM);
});
