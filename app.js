const { createApp } = Vue

const options = {
    template: `
        <section class="container">
            <h1>{{greet}}</h1>
        </section>
    `,
    data() {
        return {
            greet: 'Hi, welcome to Vue!',
        }
    },
}
const app = createApp(options)
app.mount('#app')
