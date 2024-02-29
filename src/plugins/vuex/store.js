import {createStore} from "vuex";
import user from "@/plugins/vuex/user.js";
import book from "@/plugins/vuex/book.js";
import category from "@/plugins/vuex/category.js";

export default createStore({
    modules: {
        book,
        category,
        user

    }
})