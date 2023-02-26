const { createApp } = Vue

import CarIndex from './cmps/CarIndex.js'

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
app.mount('#app')
