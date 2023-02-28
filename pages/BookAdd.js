import { bookService } from "../services/book.service.js"
import { googleBookService } from "../services/google-book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export default {
    template: `
        <section class="book-add">
            <h2>Add a book</h2>
            <form @submit.prevent="getGoogleBooks">
                <input type="text" v-model="searchKey" placeholder="Book name">
                <button>search</button>
                {{searchKey}}
           </form>
       <ul>
            <li v-for="book in books" :key="book.id">
                     {{book.volumeInfo.title}}
                     <button @click="AddBook(book)">+</button>
            </li>
       </ul>
          
           
        </section>
    `,
    data() {
        return {
            books: [],
            searchKey: ''
        }
    },
    created() {

    },
    methods: {
        AddBook(book) {
            bookService.addGoogleBook(book)
                .then(book => showSuccessMsg('Book Add success!'))
                .catch(err => showErrorMsg('Book Add failed!'))

        },
        getGoogleBooks() {
            googleBookService.query(this.searchKey)
                .then(books => this.books = books)
                
        }
    }
}