import './style.css'
import Alpine from 'alpinejs'
import { countdown } from './js/countdown.js'
import { event } from './js/event.js'
import { registerReveal } from './js/reveal.js'
import { registerScrollStore } from './js/scroll-store.js'
import { gallery, galleryPhotos, dresscodePhotos } from './js/gallery.js'

window.Alpine = Alpine
Alpine.data('countdown', () => countdown(event.fecha))
Alpine.data('gallery', () => gallery(galleryPhotos))
Alpine.data('dresscode', () => ({ paleta: event.paleta, ...gallery(dresscodePhotos) }))
Alpine.data('lugar', () => ({ ...event.lugar }))
Alpine.data('rsvp', () => ({
  opciones: event.rsvpOpciones,

  enviar(mensaje) {
    const url = `https://wa.me/${event.whatsapp}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank', 'noopener')
  },
}))
registerReveal(Alpine)
registerScrollStore(Alpine)

Alpine.start()
