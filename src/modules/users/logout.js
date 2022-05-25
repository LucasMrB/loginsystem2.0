import { loginPath } from '../config/Consts.js';

export function initLogout() {
  const logoutButton = document.querySelector('[data-logout]');

  function logout(e) {
    e.preventDefault();

    const isLoggedIn = false;
    localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));
    window.location = loginPath;
  }

  if(logoutButton) {
    logoutButton.addEventListener('click', logout)
  }
}
