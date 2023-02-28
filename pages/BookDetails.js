import { bookService } from "../services/book.service.js"

import ReviewPreview from "../cmps/ReviewPreview.js"
import LongTxt from "../cmps/LongTxt.js"
import AddReview from "./AddReview.js"

export default {
    // props:['bookId'],
    template: `
        <section class="book-details" v-if="book">
            <img v-if="book.listPrice.isOnSale" class="sale" src="assets/img/sale.png" />
            <img class="book-img" :src="book.thumbnail" />
            
            <!-- <h1>{{$route.query.user}}</h1> -->
            <div class="book-info">
                <h2>title: {{ book.title }}</h2>
                <h3>Subtitle:<span>{{ book.subtitle }}</span></h3> 
                <h3>Authors: <span>{{ authors }}</span></h3>
                <h3>Categories: <span> {{ categories }}</span></h3>
                <h3>Price: <span :class="lowOrHighClass">{{ formattedPrice }}</span></h3>
                <h3>Page Count: <span>{{book.pageCount}} {{ readingLevel }}</span></h3>
                <h3>Published Date:  <span>{{book.publishedDate}} {{ newOrOld }}</span></h3>
                <h3>Language: <span>{{ book.language }}</span></h3>
                <LongTxt :txt="book.description" />
                
                <nav>
                    <RouterLink :to="{name:'review', params:{bookId:book.id}}">Add your review</RouterLink> | 
                    <RouterLink to="/book">Back to list</RouterLink> |
                    <RouterLink :to="'/book/' + book.prevBookId">Previous Book</RouterLink> |
                    <RouterLink :to="'/book/' + book.nextBookId">Next Book</RouterLink>
                </nav>

            </div>
            <ul class="clean-list">
                <li v-for="review in book.reviews" v-if="book.reviews" :key="review.id">
                    <ReviewPreview :review="review"/>
                    <button @click="remove(book.id, review.id)">x</button>
                    
                    <!-- <pre>
                        {{review}}
                    </pre> -->
                </li>
            </ul>
        </section>
        `,
    data() {
        //  router.push({ path: `/user/${username}` }) // -> /user/eduardo 
        return {
            book: null
        }
    },
    created() {
        this.loadBook()
    },
    methods: {
        remove(bookId, reviewId) {
            bookService.removeReview(bookId, reviewId)
                .then(book => this.book = book)
        },
        loadBook() {
            bookService.get(this.bookId)
                .then(book => this.book = book)
        },
    },
    computed: {
        bookId() {
            return this.$route.params.bookId
        },
        readingLevel() {
            if (this.book.pageCount < 100) return 'Light Reading'
            if (this.book.pageCount > 500) return 'Serious Reading'
            if (this.book.pageCount > 200) return 'Descent Reading'
        },
        newOrOld() {
            let now = new Date
            now = now.getFullYear()
            if (this.book.publishedDate === now) return 'New'
            if (now - this.book.publishedDate >= 10) return 'Vintage'
        },
        lowOrHighClass() {
            return {
                'high-price': this.book.listPrice.amount > 150,
                'low-price': this.book.listPrice.amount < 20,
            }
        },
        formattedPrice() {
            const { amount, currencyCode } = this.book.listPrice
            return new Intl.NumberFormat('en', { style: 'currency', currency: currencyCode }).format(amount)
        },
        authors() {
            return this.book.authors.join(', ');
        },
        categories() {
            return Array.isArray(this.book.categories) ? this.book.categories.join(', ') :this.book.categories || 'No info'
        },
    },
    watch: {
        bookId() {
            this.loadBook()
        },
    },
    components: {
        LongTxt,
        AddReview,
        ReviewPreview,
    },
}