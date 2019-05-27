// frontend/bench_bnb.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { sign } from 'crypto';
import { configureStore } from './store/store'
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;