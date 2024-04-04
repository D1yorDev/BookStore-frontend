import axios from "./axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {
            let categoryUrl = ''

            if (categoryId !== null){
                categoryUrl = '?category=' + categoryId
            }
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('success, Books is successfully fetched')

                        let books ={
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Failed, there is an error in getting books')
                        reject()
                    })
            })
        },

        fetchBook(context, bookId = null) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books/' + bookId)
                    .then((response) => {
                        console.log('success, Book is successfully fetched')
                        context.commit('updateBook', response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Failed, there is an error in getting books')
                        reject()
                    })
            })
        },

        pushKitob(context,data){
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/books', data)
                    .then((response) => {
                        console.log('Kitob yaratildi')
                        context.commit('updateKitob',response.data.kitob)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Xatolik Kitob yaratilmadi')
                        reject()
                    })
            })
        }

    }, mutations: {
       updateBooks(state, books) {
           state.books = books
       },
        updateBook(state, book) {
            state.book = book
        },
        updateKitob(state, kitob) {
            state.kitob = kitob
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        },
        book: {
            name: '',
            text: '',
        },
        kitob: {
            name: '',
            description: '',
            text: '',
            category: '',

        }

    },
    getters: {
       getBooks(state) {
           return state.books.models
       },
        getBook(state) {
            return state.book
        },
        getKitob(state) {
            return state.kitob
        }
    }
}
