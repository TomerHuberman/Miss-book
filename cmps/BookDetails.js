export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <h3 :class="lowOrHighClass">{{ book.listPrice.amount }}</h3>
            <h3>{{ readingLevel }}</h3>
            <h3>{{ newOrOld }}</h3>
            <h3>{{ onSale }}</h3>

            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails() {
            this.$emit('hide-details')
        },
  
    },
    computed: {
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
        onSale(){
            return this.book.listPrice.isOnSale ? 'ON SALE!' : ''
        }
    }
}