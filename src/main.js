import './style.css'
import Alpine from 'alpinejs'
import { countdown } from './js/countdown.js'
import { event } from './js/event.js'
import { registerReveal } from './js/reveal.js'
import { registerScrollStore } from './js/scroll-store.js'
import { gallery, galleryPhotos } from './js/gallery.js'

window.Alpine = Alpine
Alpine.data('countdown', () => countdown(event.fecha))
Alpine.data('gallery', () => gallery(galleryPhotos))
registerReveal(Alpine)
registerScrollStore(Alpine)

Alpine.start()
