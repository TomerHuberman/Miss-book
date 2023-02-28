import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export default {
    template: `
        <section class="book-edit">
            <h2><span>{{(book.id)? 'Edit' : 'Add'}}</span> a book</h2>
            <form @submit.prevent="save">
                <h2>title: <input type="text" v-model="book.title" /></h2>
                <h3>Subtitle: <input type="text" v-model=" book.subtitle" /></h3> 
                <h3>Authors: <input type="text" v-model="authors" /></h3>
                <h3>Categories: <input type="text" v-model="categories" /></h3>
                <h3>Price: <input type="number" v-model.number="book.listPrice.amount" /></h3>
                <h3>Page Count: <input type="number" v-model.number="book.pageCount" /></h3>
                <h3>Published Date:  <input type="number" v-model.number="book.publishedDate" /></h3>
                <h3>Language: <input type="text" v-model=" book.language" /></h3>
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    created() {
        const { bookId } = this.$route.params
        if (bookId) {
            bookService.get(bookId)
                .then(book => this.book = book)
        }
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(() => {
                    showSuccessMsg('Book saved')
                    this.$router.push('/book')
                })
                .catch(err=>{
                    showErrorMsg('Book save failed')
                })
        }
    },
    computed:{
        authors() {
            return Array.isArray(this.book.authors) ? this.book.authors.join(', ') :this.book.authors || 'No info'
        },
        categories() {
            return Array.isArray(this.book.categories) ? this.book.categories.join(', ') :this.book.categories || 'No info'
        },
    }
}