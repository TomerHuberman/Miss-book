const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import CarIndex from './cmps/CarIndex.js'
import CarList from './cmps/CarList.js'
import CarPreview from './cmps/CarPreview.js'


const options = {
    template: `
        <section class="container">
            <AppHeader />
            <CarIndex />
            <AppFooter />
        </section>
    `,
    data() {
        return {
            greet: 'Hi, welcome to Vue!',
        }
    },
}
const app = createApp(options)

app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.component('CarIndex', CarIndex)
app.component('CarList', CarList)
app.component('CarPreview', CarPreview)

app.mount('#app')
