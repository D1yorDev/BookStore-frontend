import axios from "axios";

export default {
    actions:
        {
            fetchUserToken(context, data) {
                return new Promise((resolve, reject) => {
                    axios
                        .post('http://localhost:8888/api/users/auth', data)
                        .then((response) => {
                            context.commit('updateToken',response.data)
                            resolve()
                        })
                        .catch(() => {
                            console.log('Failed,catch() is worked')
                            reject()
                        })
                })
            }
        },
    mutations:
        {
            updateToken(state, token) {
                state.token = token['accessToken']
                localStorage.setItem('access_token', token['accessToken'])
                localStorage.setItem('refresh_token', token['refreshToken'])
            },
        },
    state:
        {
            token: localStorage.getItem('access_token')
        },
    getters:
        {
        getToken(state) {
            return state.token
        }
    }
}
