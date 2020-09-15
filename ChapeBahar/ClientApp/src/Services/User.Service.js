//import { authHeader } from '../Helpers/AuthenticationHeaders';
import http from 'axios';
import { store } from 'react-notifications-component';
import { notifConfig } from '../UI/Notification/Notification.config'

export const userService = { login, logout };

function login(username, password) {
    let data = {
        Username: username,
        Password: password
    }
    return http.post('Users/Authenticate', data)
        .then(response => {
            if (response.data.user) {
                let user = window.btoa(username + ':' + password);
                localStorage.setItem('user', user);
            }
            store.addNotification({
                ...notifConfig,
                message: response.data.message,
                type: response.data.type
            });
            return response.data.user;
        })
}

function logout() {
    localStorage.removeItem('user');
}
