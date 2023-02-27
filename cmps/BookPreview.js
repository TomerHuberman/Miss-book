export default {
    props: ['book'],
    template: `
        <article class="book-preview">
            <img v-if="book.listPrice.isOnSale" class="sale" src="../assets/img/sale.png" />
            <h2>{{ book.title }}</h2>
            <img :src="book.thumbnail" />
            <h3 >Price: <span :class="lowOrHighClass">{{ book.listPrice.amount }}</span> {{ book.listPrice.currencyCode }} </h3>
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