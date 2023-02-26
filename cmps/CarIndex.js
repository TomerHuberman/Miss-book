import { carService } from '../services/car.service.js'

export default {
    template: `
        <section class="car-index">
            <CarList 
                :cars="cars" 
                @remove="removeCar" 
                @show-details="showCarDetails" />
            <CarDetails 
                v-if="selectedCar" 
                @hide-details="selectedCar = null"
                :car="selectedCar"/>
            <CarEdit @car-saved="onSaveCar"/>
        </section>
    `,
    data() {
        return {
            cars: null,
            selectedCar: null,
        }
    },
    methods: {
        removeCar(carId) {
            carService.remove(carId)
                .then(() => {
                    const idx = this.cars.findIndex(car => car.id === carId)
                    this.cars.splice(idx, 1)
                })
        },
        showCarDetails(carId) {
            this.selectedCar = this.cars.find(car => car.id === carId)
        },
        onSaveCar(newCar) {
            this.cars.unshift(newCar)
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    }
}