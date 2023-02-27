export default {
    props: ['review'],
    template: `
        <article class="review-preview">
            <h2>review by: <span>{{ review.userName }}</span></h2>
            <h3 >rate: <span>{{ review.rate }}</span></h3>
            <h3>added at: <span>{{newDate}}</span></h3>
            
        </article>
    `,
    computed: {
        newDate() {
            return new Date(this.review.date).toLocaleDateString()
        },
    },
}