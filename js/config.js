// ============================================
// CONFIGURACIÓN DEL SITIO
// Editá estos valores con tus datos reales.
// ============================================
const SITE_CONFIG = {
  nombreSitio: "Lote 12",

  // El eslogan podés cargarlo en uno o varios idiomas.
  // Si falta un idioma, se muestra el italiano (o el que haya).
  eslogan: {
    it: "Auto private, controllate e con documenti in regola.",
    es: "Autos particulares, revisados y con papeles al día.",
    en: "Privately owned cars, inspected and with paperwork in order.",
    fr: "Voitures de particuliers, contrôlées et avec papiers en règle.",
    de: "Privatfahrzeuge, geprüft und mit vollständigen Papieren.",
  },

  // Tu número de WhatsApp CON código de país, sin +, sin espacios ni guiones.
  // Ejemplo Italia: 393511234567
  whatsapp: "393511234567",
  email: "tuemail@ejemplo.com",
  ciudad: "Fiumana, Emilia-Romagna",

  // Mensaje que se arma al tocar "Consultar por WhatsApp".
  // Podés traducirlo por idioma; si falta alguno, usa el italiano.
  mensajeWhatsapp: {
    it: (auto) => `Ciao! Ti scrivo per la ${auto.marca} ${auto.modelo} ${auto.anio} (Lotto N. ${auto.id}) vista sul sito. È ancora disponibile?`,
    es: (auto) => `Hola! Te escribo por el ${auto.marca} ${auto.modelo} ${auto.anio} (Lote N.º ${auto.id}) que vi en la web. ¿Sigue disponible?`,
    en: (auto) => `Hi! I'm writing about the ${auto.marca} ${auto.modelo} ${auto.anio} (Lot No. ${auto.id}) I saw on the site. Is it still available?`,
    fr: (auto) => `Bonjour ! Je vous contacte au sujet de la ${auto.marca} ${auto.modelo} ${auto.anio} (Lot n° ${auto.id}) vue sur le site. Est-elle toujours disponible ?`,
    de: (auto) => `Hallo! Ich schreibe wegen des ${auto.marca} ${auto.modelo} ${auto.anio} (Los-Nr. ${auto.id}), den ich auf der Website gesehen habe. Ist er noch verfügbar?`,
  },
};
