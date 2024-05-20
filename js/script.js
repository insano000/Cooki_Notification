document.addEventListener("DOMContentLoaded", function() {
  const cookieDialog = document.getElementById('cookie-dialog');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  const rejectCookiesButton = document.getElementById('reject-cookies');

  setTimeout(function() {
    cookieDialog.style.display = 'block';
  }, 500);

  acceptCookiesButton.addEventListener('click', function() {
    alert("Ha aceptado el uso de cookies.");
    cookieDialog.style.display = 'none';
  });

  rejectCookiesButton.addEventListener('click', function() {
    alert("Ha rechazado el uso de cookies.");
    cookieDialog.style.display = 'none';
  });

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
      window.location.href = "welcome.html";
    } else {
      window.location.href = "anonimo.html";
    }
  });
});
