import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export default {
    // props: ['bookId'],
    template: `
        <article class="add-review">
            <form class="add-review-form" @submit.prevent="addReview">
                <label For="review-name">Add a review</label>
                <input id="review-name" type="text" v-model="review.userName" placeholder="Full name" required/>
                <textarea v-model="review.txt" cols="30" rows="5"></textarea>
                <select v-model="review.rate">
                    <option v-for="n in 5" :value="n" :key="n">{{n}}</option>
                
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
                txt: '',
                date: Date.now(),
            },
        }
    },
    created() {
    },
    methods: {
        addReview() {
            bookService.addReview(this.bookId, this.review)
                .then(() => {
                    showSuccessMsg('Review Added')
                    this.resetReview()
                    this.$router.push(this.bookDetails)
                })
                .catch(err => showErrorMsg('Review Add Fail'))

        },
        resetReview() {
            this.review.rate = 1
            this.review.userName = ''
            this.review.txt = ''
        },
    },
    computed: {
        bookDetails() {
            return '/book/' + this.bookId
        },
        bookId() {
            return this.$route.params.bookId
        }
    }
}