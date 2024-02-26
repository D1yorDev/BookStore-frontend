import {createStore} from "vuex";
import user from "@/plugins/vuex/user.js";

export default createStore( {
    modules: {
        user
    }
})