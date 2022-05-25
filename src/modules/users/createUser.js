export function initCreateUser() {
  const formCreate = document.querySelector('[data-form="create"]');
  const successMessage = document.querySelector('[data-form="success"]');

  function createUser(e) {
    e.preventDefault();

    const nameValue = document.querySelector('[data-create="name"]').value;
    const loginValue = document.querySelector('[data-create="login"]').value;
    const emailValue = document.querySelector('[data-create="email"]').value;
    const passwordValue = document.querySelector('[data-create="password"]').value;

    const listUsers = JSON.parse(localStorage.getItem('sistema:users') || '');
    
    const newUser = {
        name: nameValue,
        login: loginValue,
        email: emailValue,
        password: passwordValue
      }
    ;

    listUsers.users.push(newUser);

    localStorage.setItem('sistema:users', JSON.stringify(listUsers));
    successMessage.classList.remove('hide');
  }

  if(formCreate) {
    formCreate.addEventListener('submit', createUser)
  }
}
