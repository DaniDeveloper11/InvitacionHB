import './style.css'
import Alpine from 'alpinejs'
import { countdown } from './js/countdown.js'
import { event } from './js/event.js'

window.Alpine = Alpine
Alpine.data('countdown', () => countdown(event.fecha))

Alpine.start()
