import axios from "./axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {
            let categoryUrl = ''

            if (categoryId !== null) {
                categoryUrl = '?category=' + categoryId
            }
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('success, Books is successfully fetched')

                        let books = {
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
        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books/' + bookId)
                    .then((response) => {
                        context.commit('updateBook', response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('error taking books')
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
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        },
        book: {
            name: '',
            text: ''
        }
    },
    getters: {
        getBooks(state) {
            return state.books.models
        },
        getBook(state) {
            return state.book
        }
    }
}
