export function initLogin() {
  const formLogin = document.querySelector('[data-form="login"]');
  const errorMessage = document.querySelector('[data-form="error"]');

  function login(e) {
    e.preventDefault();

    const loginValue = document.querySelector('[data-login="login"]').value;
    const passwordValue = document.querySelector('[data-login="password"]').value;

    const usersList = JSON.parse(localStorage.getItem('sistema:users') || '');

    const isUserRight = usersList.users.find((user) => (loginValue == user.login && passwordValue == user.password));

    if(isUserRight) {
      const isLoggedIn = true;
      localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));

      const userInfo = {name: isUserRight.name};
      localStorage.setItem('sistema:userInfo', JSON.stringify(userInfo));

      window.location = window.location.href.replace('index.html', '') + 'sistema/index.html';
    }

    if(!isUserRight && errorMessage) {
      errorMessage.classList.remove('hide');
    }

  }

  if(formLogin) {
    formLogin.addEventListener('submit', login)
  }
}
