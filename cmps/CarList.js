export default {
    props:['cars'],
    template: `
        <section class="car-list">
            <ul>
                <li v-for="car in cars" :key="car.id">
                    <CarPreview :car="car"/>
                    <button @click="showDetails(car.id)">Details</button>
                    <button @click="remove(car.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(carId) {
            this.$emit('remove', carId)
        },
        showDetails(carId){
            this.$emit('show-details', carId)
        },
    }
}