// Mostrar la notificación de las cookies
const cookieNotification = document.querySelector('.cookie-notification');
const acceptButton = document.querySelector('.accept-cookies');
const rejectButton = document.querySelector('.reject-cookies');

// Mostrar la notificación de cookies después de 5 segundos
setTimeout(() => {
  cookieNotification.classList.add('visible');
}, 5000);

// aceptación de cookies
acceptButton.addEventListener('click', () => {
  document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  cookieNotification.classList.remove('visible');
});

//  rechazo de cookies
rejectButton.addEventListener('click', () => {
  document.cookie = 'cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  cookieNotification.classList.remove('visible');
});

// formulario de login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  document.cookie = `username=${username}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  window.location.href = 'welcome.html';
});

// Mostrar el mensaje de bienvenida
window.addEventListener('load', () => {
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=');
    acc[name] = value;
    return acc;
  }, {});
// hola mundos
  if (document.getElementById('welcome-message')) {
    const welcomeMessage = document.getElementById('welcome-message');
    if (cookies.cookies_accepted === 'true' && cookies.username) {
      welcomeMessage.textContent = `Hola Mundo, ${cookies.username}`;
    } else {
      welcomeMessage.textContent = 'Hola Mundo Anónimo';
    }
  }
});
