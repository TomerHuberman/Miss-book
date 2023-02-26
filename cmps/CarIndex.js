import { carService } from '../services/car.service.js'

import CarFilter from './CarFilter.js'
import CarList from './CarList.js'

import CarDetails from './CarDetails.js'
import CarEdit from './CarEdit.js'

export default {
    template: `
        <section class="car-index">
            <CarFilter @filter="setFilterBy"/>
            <CarList 
                :cars="filteredCars" 
                v-if="cars"
                @remove="removeCar" 
                @show-details="showCarDetails" />
            <CarEdit @car-saved="onSaveCar"/>
            <CarDetails 
                v-if="selectedCar" 
                @hide-details="selectedCar = null"
                :car="selectedCar"/>
        </section>
    `,
    data() {
        return {
            cars: null,
            selectedCar: null,
            filterBy: {},
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
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredCars() {
            const regex = new RegExp(this.filterBy.vendor, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    },
    components: {
        CarFilter,
        CarList,
        CarDetails,
        CarEdit,
    }
}