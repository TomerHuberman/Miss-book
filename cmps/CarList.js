export default {
    props:['cars'],
    template: `
        <section class="car-list">
            <ul>
                <li v-for="car in cars">
                    <CarPreview :car="car"/>
                </li>
            </ul>
        </section>
    `,
}