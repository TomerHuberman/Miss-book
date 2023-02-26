import { carService } from "../services/car.service.js"

export default {
    template: `
        <section class="car-edit">
            <h2>Add a car</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="car.vendor" placeholder="Vendor">
                <input type="number" v-model.number="car.maxSpeed">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            car: carService.getEmptyCar()
        }
    },
    methods: {
        save() {
            carService.save(this.car)
                .then(savedCar => {
                    this.car = carService.getEmptyCar()
                    this.$emit('car-saved', savedCar)
                })
        }
    }
}