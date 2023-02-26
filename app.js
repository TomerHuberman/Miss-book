const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import CarIndex from './cmps/CarIndex.js'
import CarFilter from './cmps/CarFilter.js'
import CarList from './cmps/CarList.js'
import CarPreview from './cmps/CarPreview.js'

import CarDetails from './cmps/CarDetails.js'
import CarEdit from './cmps/CarEdit.js'

import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'

const options = {
    template: `
        <section class="container">
            <AppHeader @setRoute="route = $event"/>
            <main class="router-view">
                <HomePage v-if="route === 'HomePage'"/>
                <CarIndex v-if="route === 'CarIndex'"/>
                <AboutPage v-if="route === 'AboutPage'"/>
            </main>
            <AppFooter />
        </section>
    `,
    data() {
        return {
            route: 'CarIndex',
        }
    },
}
const app = createApp(options)

app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.component('CarIndex', CarIndex)
app.component('CarFilter', CarFilter)
app.component('CarList', CarList)
app.component('CarPreview', CarPreview)

app.component('CarDetails', CarDetails)
app.component('CarEdit', CarEdit)

app.component('HomePage', HomePage)
app.component('AboutPage', AboutPage)

app.mount('#app')
