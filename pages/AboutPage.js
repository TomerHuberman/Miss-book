export default {
    template: `
        <section class="about-page">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
            <nav>
                <RouterLink to="/about/team">Our team</RouterLink> |
                <RouterLink to="/about/goal">Our goals</RouterLink> |
                <RouterLink to="/about">Close</RouterLink> 
            </nav>
            <hr />
            <RouterView />
            <hr />    
        </section>
    `,
}

export const AboutTeam = {
    template: `<section>
        <h3>Our team is amazing</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`
}
export const AboutGoal = {
    template: `<section>
        <h3>Our Goals is to be the best!!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`
}