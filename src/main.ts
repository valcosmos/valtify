import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.scss'
import Button from './button'

createApp(App).use(Button).mount('#app')
