import BookPreview from './BookPreview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id">
                    <button @click="remove(book.id)">x</button>
                    <BookPreview :book="book"/>
                    <nav>
                        <RouterLink :to="{name:'details', params:{bookId:book.id}, query:{user:'tomer'}}">Details</RouterLink>
                        <RouterLink :to="'/book/edit/'+book.id">Edit</RouterLink>
                    </nav>
                
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(bookId) {
            this.$emit('remove', bookId)
        },
    },
    components: {
        BookPreview,
    }
}