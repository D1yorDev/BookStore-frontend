import axios from "./axios";
export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/categories')
                    .then((response) => {
                        console.log('kategoriyalr muvaffaqiyatli olindi')

                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }

                        context.commit('updateCategories', categories)
                        resolve()
                    })
                    .catch(() => {
                        console.log('kategoriyalar olishda xatolik')
                        reject()
                    })
            })
        },
        fetchCreateKategory(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/categories', data)
                    .then((response) => {
                        context.commit('updateCreateCategories',response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Failed,catch() is worked')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateCategories(state, categories){
            state.categories =categories
        },
        updateCreateCategories(state, createkategories){
            state.createCategories = createkategories
        }
    },
    state: {
        categories: {
            models: [],
            totalItems: 0
        },
        createCategories: ''
    },
    getters: {
        getCategories(state) {
            return state.categories.models
        },
        getCreateCategories(state) {
            return state.createCategories
        }
    }
}
