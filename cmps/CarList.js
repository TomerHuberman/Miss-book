export default {
    props:['cars'],
    template: `
        <section class="car-list">
            <ul>
                <li v-for="car in cars">
                    <CarPreview :car="car"/>
                    <button @click="remove(car.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(carId) {
            this.$emit('remove', carId)
        }
    }
}