export default {
    template: `
        <header class="app-header">
            <div className="logo"></div>
            <h1>Miss Book</h1>
            <nav>
                <RouterLink v-for="(route, idx) in routes" :to="route.path" 
                :title="route.title">{{route.title}}</RouterLink> 
            </nav>
        </header>
    `,
    data() {
        return {
            routes: [
                { path: '/', title: 'Home' },
                { path: '/book', title: 'Book' },
                { path: '/about', title: 'About' }
            ]
        }
    },
    methods: {
    }
}