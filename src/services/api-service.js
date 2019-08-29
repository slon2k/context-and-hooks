import { API_KEY, BASE_URL } from './api-config.local.js'
const AUTH_URL =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

const users = [
    {
        id: 101,
        name: "User 1"
    },
    {
        id: 102,
        name: "User 2"
    },
    {
        id: 103,
        name: "User 3"
    },
];

export default class apiService {
    getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.8) {
                    reject(new Error('Unable to get data'))
                } else {
                    resolve(users)
                }
            }, 500)
        });
    }

    signIn = async (credentials) => {
        const result = await fetch(AUTH_URL, {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...credentials, returnSecureToken: true}),
            });
        if (!result.ok) {
            console.log(result);
            throw new Error(`Sign In Failed`);
        }
        return await result.json();
    }

    signUp = async (credentials) => {
        const result = await fetch(SIGNUP_URL, {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...credentials, returnSecureToken: true}),
        });
        if (!result.ok) {
            console.log(result);
            throw new Error(`Sign Up Failed`);
        }
        return await result.json();
    }
}