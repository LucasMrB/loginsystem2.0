export function initListUsers() {
  const listWrapper = document.querySelector('[data-list="wrapper"]');
  let usersList = '';

  if(listWrapper) {
    const listUsers = JSON.parse(localStorage.getItem('sistema:users') || '');

    listUsers.users.map(user => {
      const userInfos = `
        <tr>
          <td>${user.name}</td>
          <td>${user.login}</td>
          <td>${user.email}</td>
        </tr>
      `
      return usersList+= userInfos;
    });

    listWrapper.innerHTML = usersList;
  }
}
