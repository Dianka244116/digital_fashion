'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('information__form');
  const popup = document.getElementById('success-popup');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const question = document.getElementById('textarea').value

    if (name.length < 3) {
      alert('Имя должно быть не менее 3-х символов.');
      return;
    }

    if (email === '' || !email.includes('@') ) {
      alert('Введите корректный адрес почты.');
      return;
    }

    if (phone === '') {
      alert('Введите номер телефона.');
      return;
    }

    if (question.length < 10) {
      alert('Вопрос должен содержать не меньше чем 10 символов.');
      return;
    }

    // Показываем всплывающее сообщение
    popup.style.display = 'block';

    // Прячем сообщение через 3 секунды
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);

    form.reset();
  });
});