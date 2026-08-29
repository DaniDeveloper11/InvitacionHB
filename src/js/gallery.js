// Fotos de la galería. Coloca los archivos en public/images/gallery/
// y actualiza esta lista (usa el mismo orden en el que quieres que aparezcan).
export const galleryPhotos = Array.from({ length: 10 }, (_, i) => `/images/gallery/${i + 1}.webp`)

// Componente Alpine: cuadrícula + visor a pantalla completa (lightbox).
export function gallery(photos) {
  return {
    photos,
    open: false,
    index: 0,

    show(i) {
      this.index = i
      this.open = true
      document.body.style.overflow = 'hidden'
    },

    close() {
      this.open = false
      document.body.style.overflow = ''
    },

    next() {
      this.index = (this.index + 1) % this.photos.length
    },

    prev() {
      this.index = (this.index - 1 + this.photos.length) % this.photos.length
    },
  }
}
