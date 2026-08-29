// Componente Alpine para el botón flotante de música de fondo.
// El navegador bloquea el autoplay con sonido hasta que hay una interacción
// del usuario, así que intentamos reproducir de inmediato y, si falla,
// reintentamos en cuanto detectamos el primer toque/clic en la página.
export function audioPlayer() {
  return {
    playing: false,

    init() {
      const tryPlay = () => this.$refs.audio.play().catch(() => {})
      tryPlay()
      document.addEventListener('pointerdown', tryPlay, { once: true })
    },

    toggle() {
      if (this.playing) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play().catch(() => {})
      }
    },
  }
}
