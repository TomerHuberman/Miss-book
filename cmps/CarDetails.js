export default {
    props: ['car'],
    template: `
        <section class="car-details">
            <h2>{{ car.vendor }}</h2>
            <h3>{{ car.maxSpeed }}</h3>
            <img :src="'../assets/img/' + car.vendor + '.png'" alt="">
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    }
}