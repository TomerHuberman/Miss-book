const { createApp } = Vue

import CarIndex from './cmps/CarIndex.js'
import CarList from './cmps/CarList.js'
import CarPreview from './cmps/CarPreview.js'

const options = {
    template: `
        <section class="container">
            <CarIndex />
        </section>
    `,
    data() {
        return {
            greet: 'Hi, welcome to Vue!',
        }
    },
}
const app = createApp(options)

app.component('CarIndex', CarIndex)
app.component('CarList', CarList)
app.component('CarPreview', CarPreview)

app.mount('#app')
