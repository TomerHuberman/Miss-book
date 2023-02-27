import { bookService } from "../services/book.service.js"
import { eventBusService } from "../services/event-bus.service.js"

export default {
    // props: ['bookId'],
    template: `
        <article class="add-review">
            <form @submit.prevent="addReview">
                <label For="review-name">Add a review</label>
                <input id="review-name" type="text" v-model="review.userName" placeholder="Full name" required/>
                <select v-model="review.rate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Submit</button>
            </form>
        </article>
    `,
    data() {
        return {
            review: {
                userName: '',
                rate: 1,
                date: Date.now(),
            },
            bookId: null
        }
    },
    created() {
        const { bookId } = this.$route.params
        this.bookId = bookId
        console.log("this.bookId: ", this.bookId);
        // bookService.get(bookId)
        //     .then(book => this.book = book)
    },
    methods: {
        addReview() {
            bookService.addReview(this.bookId, this.review)
                .then(() => {
                    eventBusService.emit('show-msg', { txt: 'Review Added', type: 'success' })
                    this.resetReview()
                    this.$router.push(this.bookDetails)
                })

        },
        resetReview() {
            this.review.rate = 1
            this.review.userName = ''
        },
    },
    computed: {
        bookDetails() {
            return '/book/' + this.bookId
        }
    }
}