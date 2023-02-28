export default {
    props: ['review'],
    template: `
        <article class="review-preview">
            <h2>review by: <span>{{ review.userName }}</span></h2>
           <ul class="clean-list flax">rate: 
                <li v-for="star in review.rate"> ⭐</li>
            </ul>
            <pre v-if="review.txt">{{review.txt}}</pre>
            <h3>added at: <span>{{newDate}}</span></h3>
            
        </article>
    `,
    computed: {
        newDate() {
            return new Date(this.review.date).toLocaleDateString()
        },
    },
}