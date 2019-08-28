const data = [
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

const API_KEY = "AIzaSyC1O6cYzQnuEZZ1_9YYT3d6-MWNgU4hQNs";
const BASE_URL = "https://slon2k-test-api.firebaseio.com/";
const AUTH_URL =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export default class apiService {
    getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.8) {
                    reject(new Error('Unable to get data'))
                } else {
                    resolve(data)
                }
            }, 2000)
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

    signUp(credentials) {
        fetch(SIGNUP_URL, {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...credentials, returnSecureToken: true}),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
        ;

    }
}