export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const loginUser = (credentials) => {
    return async (dispatch) => {
        try {
             const response = await callLoginApi(credentials);
            if (response.sessionId) {
                dispatch(loginSuccess(response))
            }

        } catch(error) {
            console.log("login failed");
        }
    }
}

const callLoginApi = (creds) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                sessionId :'a1ws2wre231',
                username: 'testUser',
                balance: 1000
            });
        }, 1000)
    })
}