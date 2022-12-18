import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import valtify from '../scripts/entry'

createApp(App).use(valtify).mount('#app')
