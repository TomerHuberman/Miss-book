export default {
    props: ['book'],
    template: `
        <article class="book-preview">
            <h2>{{ book.title }}</h2>
            <img :src="book.thumbnail" />
            <h3 :class="lowOrHighClass">{{ book.listPrice.amount }}</h3>
        </article>
    `,
    computed: {
        lowOrHighClass() {
            return {
                'high-price': this.book.listPrice.amount > 150,
                'low-price': this.book.listPrice.amount < 20,
            }
        },
    }
}