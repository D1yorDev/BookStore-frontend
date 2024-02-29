import axios from "axios";
import store from "@/plugins/vuex/store.js";


axios.defaults.headers.common['Content-Type'] = 'application/ld+json'

axios.interceptors.request.use((config)=> {
    if (config.url !== 'http://localhost:8888/api/users/auth') {
        config.headers.Authorization = 'bearer ' + store.getters.getToken
    }
    return config;
})

export default axios