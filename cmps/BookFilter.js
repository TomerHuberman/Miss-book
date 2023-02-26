export default {
    template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
            <input 
                v-model="filterBy.amount"
                @input="filter"
                min="0"
                max="200"
                step="10"
                type="range" />
                <span :class="lowOrHighClass">{{filterBy.amount}}</span>
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', amount: 200 },
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        },
      
    },
    computed: {
        lowOrHighClass() {
            return {
                'high-price': this.filterBy.amount > 150,
                'low-price': this.filterBy.amount <= 20,
            }
        },
    },
    created() {
        this.filter()
    }
}
