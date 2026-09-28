// Datos del evento: cambia estos valores para actualizar la invitación.
export const event = {
  nombre: 'Mi Cumpleaños',
  // Fecha y hora del evento en formato ISO (respeta la zona horaria local).
  fecha: '2027-01-10T19:00:00',

  lugar: {
    nombre: "Becerra's Bar",
    direccion: 'Calle Escobedo 179, Etzatlan, jal',
    mapsUrl: 'https://www.google.com/maps/place/Escobedo+179,+Centro,+46500+Etzatl%C3%A1n,+Jal./@20.7666277,-104.0923038,20.27z/data=!4m6!3m5!1s0x84266fd3608200e5:0x9abd2da26d1ea5f6!8m2!3d20.7665984!4d-104.0921498!16s%2Fg%2F11vzf_j0p9?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
  },
  // Número de WhatsApp del cumpleañero para el botón de confirmación.
  // Formato: código de país + número, sin "+", espacios ni guiones (ej. 523312345678).
  whatsapp: '523861095709',
  // Opciones de confirmación: el invitado elige una y se envía como mensaje
  // de WhatsApp tal cual está escrita aquí. Edita el texto o el orden libremente.
  rsvpOpciones: [
    '¡Sí, ahí estaré! 🎉',
    'Sí, iré acompañado/a 👥',
    'Aún no estoy seguro/a 🤔',
    'No podré asistir 😢',
    '¡Feliz cumpleaños! 🎂',
    'Tengo una duda ✋',
  ],
  codigoVestimenta: 'Blanco & Negro',
  // Colores sugeridos para el dress code (los círculos de la sección).
  // Usa los tonos que apliquen a tu evento, en cualquier cantidad.
  paleta: ['#1a1a1a', '#f0ece4'],
}
