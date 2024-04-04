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
            },
            fetchUser(context, data) {
                return new Promise((resolve, reject) => {
                    axios
                        .post('http://localhost:8888/api/users', data)
                        .then((response) => {
                            context.commit('updateUser',response.data)
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
            updateUser(state, user) {
                state.user = user
            }
        },
    state:
        {
            token: localStorage.getItem('access_token'),
            user: ''
        },
    getters:
        {
        getToken(state) {
            return state.token
        },
            getUser(state) {
                return state.user
            }
    }
}
