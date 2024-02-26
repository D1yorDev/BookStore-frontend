import axios from "axios";
 export default {
    actions: {
        fetchUserToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8507/api/users/auth', data)
                    .then((response) => {
                        console.log('success, then() is worked')
                        console.log(response.data)
                        context.commit('updateToken'.response.data.token)
                        resoleve()
                    })
                    .catch(() => {
                        console.log('Failed,catch() is worked')
                        reject()
                    })
            })
        }
    }, mutations: {
        updateToken(state, token) {
            state.token = token
        }
    }, state: {
        token: null
    }, getters: {
        getToken(state) {
            return state.token
        }
    }
}
