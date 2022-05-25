import Modal from './modules/Modal.js';
import { initListUsers } from './modules/users/listUsers.js';
import { initStartSistem } from './modules/users/startSistem.js';
import { initCreateUser } from './modules/users/createUser.js';
import { initLogin } from './modules/users/login.js';
import { initLogout } from './modules/users/logout.js';
import { initWellcome } from './modules/users/wellcome.js';

const modal = new Modal('.modal-overlay', '[data-modal="open"]', '[data-modal="close"]');
modal.init();

initStartSistem();
initCreateUser();
initListUsers();
initLogin();
initLogout();
initWellcome();
