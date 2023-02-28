import { bookService } from '../services/book.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    template: `
        <section class="book-index">
            <BookFilter @filter="setFilterBy"/>
            <RouterLink to="/book/edit">Add a book</RouterLink> | 
            <RouterLink to="/book/add">Add a google book</RouterLink>

            <BookList 
                :books="filteredBooks" 
                v-if="books"
                @remove="removeBook" />
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: {},
        }
    },
    created() {
        bookService.query()
            .then(books => {
                this.books = books
                console.log("books: ", books);
            })
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                    showSuccessMsg('Book removed')
                })
                .catch(err => showErrorMsg('Book remove failed'))
        },
        onSaveBook(newBook) {
            this.books.unshift(newBook)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => {
                return regex.test(book.title) &&
                    book.listPrice.amount < this.filterBy.amount
            })
        }
    },
    components: {
        BookFilter,
        BookList,
    }
}