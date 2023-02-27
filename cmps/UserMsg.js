import { eventBusService } from '../services/event-bus.service.js'


export default {
    template: `
        <div class="user-msg" :class="[msg.type, isShown ? 'show' : '']" v-if="msg">
            <button @click="msg=null">x</button>
            <p>
                {{msg.txt}}
            </p>
        </div>
    `,
    data() {
        return {
            msg: null,
            isShown: false
        }
    },
    created() {
        this.unsubscribe = eventBusService.on('show-msg', (msg) => {
            console.log('Msg:', msg)
            this.msg = msg
            setTimeout(this.setClass , 300)
            setTimeout(this.setClass , 2100)
            setTimeout(() => {
                this.msg = null
            }, 3000)
        })
    },
    methods: {
        setClass() {
            this.isShown = !this.isShown
        },
    },
    unmounted() {
        // This code never runs in this case
        this.unsubscribe()
    }
}