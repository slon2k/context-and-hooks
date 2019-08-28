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
}