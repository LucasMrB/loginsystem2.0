export function initWellcome() {
  const wellcomeBox = document.querySelector('[data-wellcome]');

  function wellcome() {
    const userInfo = JSON.parse(localStorage.getItem('sistema:userInfo') || '');

    wellcomeBox.innerHTML = 'Olá ' + userInfo.name;
  }

  if(wellcomeBox) {
    wellcome();
  }
}
