import { carService } from '../services/car.service.js'

export default {
    template: `
        <section class="car-index">
            <CarList :cars="cars"/>
        </section>
    `,
    data() {
        return {
            cars: null,
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    }
}