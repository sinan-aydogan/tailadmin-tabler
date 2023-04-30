import {createApp} from 'vue'
import './style.css'
import {Router} from '@/routes'

// @ts-ignore
import App from '@/App.vue'

createApp(App)
    .use(Router)
    .mount('#app')
