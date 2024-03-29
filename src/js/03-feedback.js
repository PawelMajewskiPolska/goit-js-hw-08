import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(currentData, 500));

function currentData() {
  const { email, message } = form.elements;
  const SetData = JSON.stringify({
    email: email.value,
    message: message.value,
  });
  localStorage.setItem('feedback-form-state', SetData);
}

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const getSavedData = JSON.parse(savedFormData);
  const { email, message } = form.elements;
  email.value = getSavedData.email;
  message.value = getSavedData.message;
}

form.addEventListener('submit', sendSumbit);

function sendSumbit(e) {
  e.preventDefault();
  const { email, message } = form.elements;
  const SetData = JSON.stringify({
    email: email.value,
    message: message.value,
  });
  localStorage.setItem('feedback-form-state', SetData);
  console.log(SetData);
  /* console.log(`email: ${email.value}, message: ${message.value}`); */
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
