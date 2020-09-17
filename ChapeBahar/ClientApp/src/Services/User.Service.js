import { authHeader } from '../Helpers/AuthenticationHeaders';
import http from 'axios';
import { store } from 'react-notifications-component';
import { notifConfig } from '../UI/Notification/Notification.config'
import * as action from './UserService.action';

export const userService = { login, logout, checkUserLoggedIn };

function login(data) {
    return http.post(action.LOGIN_USER, data)
        .then(response => {
            if (response.data.user) {
                let user = window.btoa(data.Username + ':' + data.Password);
                localStorage.setItem('user', user);
            } else {
                logout()
            }
            store.addNotification({
                ...notifConfig,
                message: response.data.message,
                type: response.data.type
            });
            return response.data.user;
        })
}

function checkUserLoggedIn() {
    let userdata = (window.atob(localStorage.getItem('user'))).split(':')
    return http.post(action.CHECK_LOGGEDIN_USER, { Username: userdata[0], Password: userdata[1] })
        .then(response => response.data.user).catch(response => response.data.user)
}

async function logout() {
    return localStorage.removeItem('user');
}
