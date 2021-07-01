// Callback based api
const client = {
    __execute(method, endpoint) {
        return {
            code: 200,
        }
    },
    request(method, endpoint, success, error) {
        const response = this.__execute(method, endpoint);
        if (response.code === 200) {
            return success(response);
        }

        return error('Whoops!');
    }
};
// Promise based api
const promiseClient = {
    __execute(method, endpoint) {
        return new Promise((resolve, reject) => {
            resolve({
                code: 200,
            });
        })
    },
    request(method, endpoint) {
        return new Promise((resolve, reject) => {
            this.__execute(method, endpoint)
            .then(response => resolve(response))
            .catch(e => {
                console.log(e)
            });  
        })
    }
};
promiseClient.request("GET", "/customers")
    .then(response => console.log(response));