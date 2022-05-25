import { loginPath } from '../config/Consts.js';
import { initListUsers } from './listUsers.js';

export function initStartSistem() {

  async function starting() {
    try {
      if(!localStorage.getItem('sistema:users')) {
        const listUsers = {
          "users": [
            {
              "name": "Lucas",
              "login": "Admin",
              "email": "lucas@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo1",
              "login": "exemplo1",
              "email": "exemplo1@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo2",
              "login": "exemplo2",
              "email": "exemplo2@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo3",
              "login": "exemplo3",
              "email": "exemplo3@gmail.com",
              "password": "123"
            }
          ]
        }

        localStorage.setItem('sistema:users', JSON.stringify(listUsers));
        initListUsers();
      }

      if(!localStorage.getItem('sistema:isLoggedIn')) {
        const isLoggedIn = false;

        localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));
      }

      if(localStorage.getItem('sistema:isLoggedIn')) {
        const isLoggedIn = JSON.parse(localStorage.getItem('sistema:isLoggedIn') || '');

        if(isLoggedIn && window.location.pathname == '/') {
          window.location = window.location.href+='sistema';
        }

        if(!isLoggedIn && window.location.pathname == '/sistema/') {
          window.location = loginPath;
        }
      }
    } catch (e) {
      console.error(e)
    }
 }

  starting();

}
