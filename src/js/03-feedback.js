import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const feedbackKey = 'feedback-form-state';

// Функція, яка зберігає дані у локальне сховище
const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(formData));
};

// Функція, яка заповнює поля форми зі значеннями з сховища
const loadFormData = () => {
  const savedData = JSON.parse(localStorage.getItem(feedbackKey));
  if (savedData) {
    emailInput.value = savedData.email || '';
    messageTextarea.value = savedData.message || '';
  }
};

// Встановлю обробник події 'input' 
emailInput.addEventListener('input', throttle(saveFormData, 500));
messageTextarea.addEventListener('input', throttle(saveFormData, 500));

// Перевіряю сховище 
window.addEventListener('load', loadFormData);

// Обробник події 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Виводимо об'єкт з полями email і message у консоль 
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);

  // Очищаємо сховище
  localStorage.removeItem(feedbackKey);

  // Очищаємо поля форми
  emailInput.value = '';
  messageTextarea.value = '';
});
