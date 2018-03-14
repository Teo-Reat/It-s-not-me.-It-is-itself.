var link = document.querySelector('.login-but');
var popup = document.querySelector('.popup');
var close = document.querySelector('.but-popup-close');
var login = popup.querySelector('[name = login]');
var pass = popup.querySelector('[name = password]');
var form = popup.querySelector('form');
var storage = localStorage.getItem('login');

// Показ модального окна с извлечением из локального хранилища данных и фокусом
link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('popup-show');
  if (storage) {
    login.value = storage;
    pass.focus();
  } else {
    login.focus();
  }
});

// Закрытие модального окна по кнопке
close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('popup-show');
  popup.classList.remove('modal-error');
});

// Проверка ввода логин/пароль и запись в локальное хранилище
form.addEventListener('submit', function() {
  if (!login.value || !pass.value) {
    event.preventDefault();
    popup.classList.add('modal-error');
    console.log('Error!');
  } else {
    localStorage.setItem('login', login.value);
  }
});

// Закрываем модальное окно по Esc
window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('popup-show')) {
      popup.classList.remove('popup-show');
      popup.classList.remove('modal-error');
    }
  }
});
