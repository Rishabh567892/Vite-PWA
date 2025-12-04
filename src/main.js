import './style.css'
import { setupCounter } from './counter.js'
import { initPWA } from './pwa.js'

const app = document.querySelector('#app')

setupCounter(document.querySelector('#counter'))

initPWA(app)
