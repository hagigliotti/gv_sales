// ============================================
// IDIOMAS
// Idioma por defecto para las visitas: italiano.
// El propio dueño del sitio puede cambiar a español
// para cargar datos más cómodo.
// ============================================

const IDIOMAS = ["it", "es", "en", "fr", "de"];
const NOMBRE_IDIOMA = { it: "Italiano", es: "Español", en: "English", fr: "Français", de: "Deutsch" };
const BANDERA_IDIOMA = { it: "🇮🇹", es: "🇪🇸", en: "🇬🇧", fr: "🇫🇷", de: "🇩🇪" };

// Textos fijos de la interfaz (no de los autos)
const UI = {
  nav_autos:        { it: "Auto",                      es: "Autos",                    en: "Cars",                 fr: "Voitures",           de: "Autos" },
  nav_servicios:     { it: "Servizi",                    es: "Servicios",                en: "Services",             fr: "Services",           de: "Dienstleistungen" },
  nav_otros:         { it: "Altri settori",               es: "Otros rubros",             en: "Other categories",    fr: "Autres secteurs",    de: "Andere Bereiche" },
  proximamente:      { it: "Prossimamente",               es: "Próximamente",             en: "Coming soon",         fr: "Bientôt",            de: "Demnächst" },
  stock_titulo:      { it: "Tutto lo stock",               es: "Todo el stock",            en: "Full inventory",      fr: "Tout le stock",      de: "Gesamtes Angebot" },
  stock_nota:        { it: "Si aggiorna man mano che entrano ed escono unità", es: "Se actualiza a medida que entran y salen unidades", en: "Updated as units come in and out", fr: "Mis à jour au fil des entrées et sorties", de: "Wird laufend aktualisiert" },
  vacio:             { it: "Per ora non ci sono auto caricate.", es: "Por ahora no hay autos cargados.", en: "No cars listed yet.", fr: "Pour l'instant, aucune voiture n'est publiée.", de: "Derzeit sind keine Autos gelistet." },
  error_carga:       { it: "Non è stato possibile caricare le auto.", es: "No se pudieron cargar los autos.", en: "Couldn't load the cars.", fr: "Impossible de charger les voitures.", de: "Die Autos konnten nicht geladen werden." },
  lote:              { it: "Lotto N.",                    es: "Lote N.º",                 en: "Lot No.",              fr: "Lot n°",             de: "Los-Nr." },
  anio:              { it: "Anno",                        es: "Año",                      en: "Year",                 fr: "Année",              de: "Baujahr" },
  km:                { it: "Km",                          es: "Km",                       en: "Mileage",              fr: "Km",                 de: "Km" },
  caja:              { it: "Cambio",                      es: "Caja",                     en: "Transmission",         fr: "Boîte",              de: "Getriebe" },
  combustible:       { it: "Alimentazione",                es: "Combustible",              en: "Fuel",                 fr: "Carburant",          de: "Kraftstoff" },
  color:             { it: "Colore",                       es: "Color",                    en: "Color",                fr: "Couleur",            de: "Farbe" },
  consultar_whatsapp:{ it: "Contatta su WhatsApp",          es: "Consultar por WhatsApp",   en: "Ask on WhatsApp",      fr: "Contacter sur WhatsApp", de: "Auf WhatsApp anfragen" },
  no_disponible:     { it: "Non disponibile",               es: "No disponible",            en: "Not available",       fr: "Indisponible",       de: "Nicht verfügbar" },
  ver_ficha:         { it: "Vedi scheda completa",          es: "Ver ficha completa",       en: "View full listing",   fr: "Voir la fiche complète", de: "Vollständiges Angebot ansehen" },
  vendido_tag:       { it: "Venduto",                       es: "Vendido",                  en: "Sold",                 fr: "Vendu",              de: "Verkauft" },
  volver:            { it: "Torna al catalogo",             es: "Volver al catálogo",       en: "Back to catalog",     fr: "Retour au catalogue", de: "Zurück zum Katalog" },
  footer_aviso:      { it: "Questo spazio crescerà con altri settori nel tempo.", es: "Este espacio va a ir sumando más rubros con el tiempo.", en: "This space will grow with more categories over time.", fr: "Cet espace accueillera d'autres secteurs avec le temps.", de: "Dieser Bereich wird mit der Zeit um weitere Angebote erweitert." },
  escribir_whatsapp: { it: "Scrivi su WhatsApp",            es: "Escribir por WhatsApp",    en: "Message on WhatsApp", fr: "Écrire sur WhatsApp", de: "Auf WhatsApp schreiben" },
  descripcion_titulo:{ it: "Descrizione",                   es: "Descripción",              en: "Description",         fr: "Description",        de: "Beschreibung" },
  specs_titulo:      { it: "Scheda tecnica",                es: "Ficha técnica",            en: "Specifications",      fr: "Fiche technique",    de: "Technische Daten" },
  auto_no_encontrado:{ it: "Auto non trovata.",              es: "Auto no encontrado.",      en: "Car not found.",      fr: "Voiture introuvable.", de: "Auto nicht gefunden." },

  // --- Ficha completa: secciones ---
  sec_basicos:       { it: "Dati di base",                  es: "Datos básicos",            en: "Basic data",          fr: "Données de base",    de: "Grunddaten" },
  sec_historial:      { it: "Storia del veicolo",             es: "Historial del vehículo",   en: "Vehicle history",     fr: "Historique du véhicule", de: "Fahrzeughistorie" },
  sec_tecnicos:       { it: "Dati tecnici",                   es: "Datos técnicos",           en: "Technical data",      fr: "Données techniques", de: "Technische Daten" },
  sec_color:          { it: "Colore e interni",                es: "Color y tapicería",        en: "Color & upholstery",  fr: "Couleur et sellerie", de: "Farbe & Innenausstattung" },
  sec_equipamiento:   { it: "Dotazione",                       es: "Equipamiento",             en: "Features",            fr: "Équipements",         de: "Ausstattung" },
  sec_mantenimiento:  { it: "Servizio e manutenzione",         es: "Historial de mantenimiento", en: "Service history",   fr: "Historique d'entretien", de: "Wartungshistorie" },
  sec_comentarios:    { it: "Note del venditore",              es: "Notas del vendedor",       en: "Seller notes",        fr: "Notes du vendeur",   de: "Anmerkungen des Verkäufers" },

  // --- Datos básicos ---
  carroceria:        { it: "Carrozzeria",                    es: "Carrocería",               en: "Body type",           fr: "Carrosserie",         de: "Karosserie" },
  condicion_venta:   { it: "Condizione",                     es: "Condición",                en: "Condition",           fr: "État",                de: "Zustand" },
  traccion:          { it: "Trazione",                       es: "Tracción",                 en: "Drivetrain",          fr: "Transmission",        de: "Antrieb" },
  plazas:            { it: "Posti",                          es: "Plazas",                   en: "Seats",               fr: "Places",              de: "Sitzplätze" },
  puertas:           { it: "Portiere",                       es: "Puertas",                  en: "Doors",               fr: "Portes",              de: "Türen" },

  // --- Historial del vehículo ---
  primera_matriculacion: { it: "Prima immatricolazione",     es: "Primera matriculación",    en: "First registration",  fr: "Première immatriculation", de: "Erstzulassung" },
  ultima_revision:   { it: "Ultima revisione",               es: "Última revisión",          en: "Last inspection",     fr: "Dernier contrôle technique", de: "Letzte Hauptuntersuchung" },
  revision_hasta:    { it: "Revisione valida fino a",         es: "Revisión válida hasta",    en: "Inspection valid until", fr: "Contrôle valide jusqu'au", de: "TÜV gültig bis" },
  propietarios:      { it: "Proprietari precedenti",          es: "Propietarios anteriores",  en: "Previous owners",     fr: "Propriétaires précédents", de: "Vorbesitzer" },
  guia_mant:         { it: "Libretto tagliandi",              es: "Guía de mantenimiento",    en: "Service booklet",     fr: "Carnet d'entretien", de: "Wartungsheft" },
  no_fumadores:      { it: "Veicolo non fumatori",            es: "Vehículo de no fumadores", en: "Non-smoker vehicle",  fr: "Véhicule non-fumeur", de: "Nichtraucherfahrzeug" },
  kit_distribucion:  { it: "Cambio kit distribuzione",        es: "Cambio de kit de distribución", en: "Timing belt kit change", fr: "Changement du kit de distribution", de: "Zahnriemenwechsel" },
  filtro_habitaculo: { it: "Cambio filtro abitacolo",         es: "Cambio de filtro de aire de habitáculo", en: "Cabin air filter change", fr: "Changement du filtre d'habitacle", de: "Innenraumfilterwechsel" },
  cambio_aceite:     { it: "Cambio olio",                     es: "Cambio de aceite",         en: "Oil change",          fr: "Vidange",             de: "Ölwechsel" },
  cambio_embrague:   { it: "Cambio frizione",                 es: "Cambio de embrague",       en: "Clutch change",       fr: "Changement d'embrayage", de: "Kupplungswechsel" },
  tipo_cubiertas:    { it: "Tipo di pneumatici",              es: "Tipo de cubiertas",        en: "Tire type",           fr: "Type de pneus",       de: "Reifentyp" },
  cambio_cubiertas:  { it: "Cambio pneumatici",               es: "Cambio de cubiertas",      en: "Tire change",         fr: "Changement de pneus", de: "Reifenwechsel" },
  escobillas:        { it: "Cambio spazzole tergicristallo",  es: "Cambio de escobillas limpiaparabrisas", en: "Wiper blades changed", fr: "Essuie-glaces changés", de: "Scheibenwischer gewechselt" },
  testigos_tablero:  { it: "Spie sul cruscotto",              es: "Testigos en el tablero",   en: "Dashboard warning lights", fr: "Voyants au tableau de bord", de: "Kontrollleuchten im Cockpit" },
  numero_llaves:     { it: "Numero di chiavi",                es: "Número de llaves",         en: "Number of keys",      fr: "Nombre de clés",      de: "Anzahl Schlüssel" },
  pais_origen:       { it: "Paese di origine",                es: "País de origen",           en: "Country of origin",   fr: "Pays d'origine",      de: "Herkunftsland" },
  aseguradora:       { it: "Compagnia assicurativa",           es: "Aseguradora",              en: "Insurance company",   fr: "Compagnie d'assurance", de: "Versicherungsgesellschaft" },
  seguro_hasta:      { it: "Copertura RCA valida fino a",      es: "Seguro (RCA) válido hasta", en: "Insurance valid until", fr: "Assurance valable jusqu'au", de: "Versicherung gültig bis" },
  seguro_estado:     { it: "Stato assicurativo",               es: "Estado del seguro",        en: "Insurance status",    fr: "État de l'assurance", de: "Versicherungsstatus" },
  bollo_estado:      { it: "Bollo auto",                        es: "Impuesto de circulación (bollo)", en: "Road tax", fr: "Taxe de circulation", de: "Kfz-Steuer" },
  bollo_hasta:       { it: "Bollo pagato fino a",                es: "Impuesto pagado hasta",   en: "Paid until",          fr: "Payée jusqu'au",      de: "Bezahlt bis" },

  // --- Pantalla multimedia instalada (tablero reemplazado) ---
  sec_multimedia_instalada: { it: "Autoradio con touch screen installato", es: "Pantalla multimedia instalada", en: "Installed touchscreen head unit", fr: "Autoradio à écran tactile installé", de: "Eingebautes Touchscreen-Radio" },
  mi_marca:          { it: "Marca",                           es: "Marca",                    en: "Brand",               fr: "Marque",              de: "Marke" },
  mi_modelo:         { it: "Modello",                          es: "Modelo",                   en: "Model",               fr: "Modèle",              de: "Modell" },
  mi_pantalla:       { it: "Dimensione schermo",                es: "Tamaño de pantalla",       en: "Screen size",         fr: "Taille d'écran",      de: "Bildschirmgröße" },
  mi_so:             { it: "Sistema operativo",                 es: "Sistema operativo",        en: "Operating system",    fr: "Système d'exploitation", de: "Betriebssystem" },
  mi_memoria:        { it: "Memoria",                           es: "Memoria",                  en: "Memory",              fr: "Mémoire",             de: "Speicher" },
  mi_conectividad:   { it: "Connettività",                      es: "Conectividad",             en: "Connectivity",        fr: "Connectivité",        de: "Konnektivität" },
  mi_notas:          { it: "Note",                              es: "Notas",                    en: "Notes",               fr: "Notes",               de: "Anmerkungen" },

  // --- Accesorios instalados (TPMS, cámara, etc.) ---
  sec_accesorios:    { it: "Accessori installati",              es: "Accesorios instalados",    en: "Installed accessories", fr: "Accessoires installés", de: "Eingebautes Zubehör" },
  acc_marca:         { it: "Marca",                             es: "Marca",                    en: "Brand",               fr: "Marque",              de: "Marke" },
  acc_modelo:        { it: "Modello",                            es: "Modelo",                   en: "Model",               fr: "Modèle",              de: "Modell" },
  medidas_cubiertas: { it: "Misure pneumatici",                 es: "Medidas de cubiertas",     en: "Tire sizes",          fr: "Dimensions des pneus", de: "Reifengrößen" },
  sec_no_incluido:   { it: "Non incluso",                        es: "No incluye",               en: "Not included",       fr: "Non inclus",          de: "Nicht enthalten" },
  precio_lista_original: { it: "Prezzo di listino originale (stimato)", es: "Precio de lista original (estimado)", en: "Original list price (estimated)", fr: "Prix catalogue d'origine (estimé)", de: "Ursprünglicher Listenpreis (geschätzt)" },
  autonomia_gpl:     { it: "Autonomia GPL (stimata)",          es: "Autonomía con GPL (estimada)", en: "LPG range (estimated)", fr: "Autonomie GPL (estimée)", de: "Autogas-Reichweite (geschätzt)" },

  // --- Datos técnicos ---
  potencia:          { it: "Potenza",                        es: "Potencia",                 en: "Power",               fr: "Puissance",           de: "Leistung" },
  cilindrada:        { it: "Cilindrata",                      es: "Cilindrada",               en: "Displacement",        fr: "Cylindrée",           de: "Hubraum" },
  velocidades_caja:  { it: "Marce",                            es: "Velocidades de la caja",   en: "Gears",               fr: "Vitesses",            de: "Gänge" },
  cilindros:         { it: "Cilindri",                         es: "Cilindros",                en: "Cylinders",           fr: "Cylindres",           de: "Zylinder" },
  tara:              { it: "Tara",                             es: "Tara",                     en: "Curb weight",         fr: "Poids à vide",        de: "Leergewicht" },
  consumo_mixto:     { it: "Consumo (misto)",                  es: "Consumo mixto",            en: "Combined consumption", fr: "Consommation mixte", de: "Kombinierter Verbrauch" },
  emisiones_co2:     { it: "Emissioni di CO2",                 es: "Emisiones de CO2",         en: "CO2 emissions",       fr: "Émissions de CO2",   de: "CO2-Emissionen" },
  clase_emision:     { it: "Classe di emissione",              es: "Clase de emisión",         en: "Emission class",      fr: "Classe d'émission",  de: "Emissionsklasse" },
  clase_ambiental:   { it: "Classe ambientale",                es: "Clase ambiental",          en: "Environmental class", fr: "Classe environnementale", de: "Umweltklasse" },

  // --- Color y tapicería ---
  color_exterior:    { it: "Colore esterno",                  es: "Color exterior",           en: "Exterior color",      fr: "Couleur extérieure", de: "Außenfarbe" },
  acabado_pintura:   { it: "Tipo di verniciatura",             es: "Acabado de pintura",       en: "Paint finish",        fr: "Finition de peinture", de: "Lackierung" },
  color_interior:    { it: "Colore interni",                   es: "Color de interior",        en: "Interior color",      fr: "Couleur intérieure", de: "Innenfarbe" },
  tapiceria:         { it: "Rivestimento sedili",              es: "Tapicería",                en: "Upholstery",          fr: "Sellerie",            de: "Polsterung" },

  // --- Equipamiento ---
  eq_comodidad:      { it: "Comfort",                          es: "Comodidad",                en: "Comfort",             fr: "Confort",             de: "Komfort" },
  eq_multimedia:     { it: "Sistema multimediale",             es: "Multimedia",               en: "Multimedia",          fr: "Multimédia",          de: "Multimedia" },
  eq_seguridad:      { it: "Sicurezza",                        es: "Seguridad",                en: "Safety",              fr: "Sécurité",            de: "Sicherheit" },
  eq_extra:          { it: "Extra",                            es: "Extra",                    en: "Extras",              fr: "Extras",              de: "Extras" },

  // --- Mantenimiento ---
  fecha:             { it: "Data",                             es: "Fecha",                    en: "Date",                fr: "Date",                de: "Datum" },
  lugar:             { it: "Officina",                         es: "Taller",                   en: "Workshop",            fr: "Atelier",             de: "Werkstatt" },
  km_evento:         { it: "Chilometraggio",                   es: "Kilometraje",              en: "Mileage",             fr: "Kilométrage",         de: "Kilometerstand" },

  sec_revisiones:    { it: "Revisioni tecniche",                es: "Revisiones técnicas",      en: "Technical inspections", fr: "Contrôles techniques", de: "Technische Prüfungen" },
  resultado:         { it: "Esito",                             es: "Resultado",                en: "Result",              fr: "Résultat",            de: "Ergebnis" },
  nota_matricula:    { it: "Nota sulla targa",                  es: "Nota sobre la matrícula",  en: "Note on the plate",   fr: "Note sur la plaque",  de: "Hinweis zum Kennzeichen" },

  si:                { it: "Sì",                               es: "Sí",                       en: "Yes",                 fr: "Oui",                 de: "Ja" },
  no:                { it: "No",                                es: "No",                       en: "No",                  fr: "Non",                 de: "Nein" },
};

// Traducciones de valores habituales que cargás en español
// (si el valor no está en el diccionario, se muestra tal cual lo escribiste)
const VALOR_DICC = {
  combustible: {
    nafta:      { it: "Benzina", es: "Nafta",   en: "Petrol",  fr: "Essence", de: "Benzin" },
    gasolina:   { it: "Benzina", es: "Gasolina", en: "Petrol",  fr: "Essence", de: "Benzin" },
    diesel:     { it: "Diesel",  es: "Diésel",   en: "Diesel",  fr: "Diesel",  de: "Diesel" },
    gnc:        { it: "GPL/Metano", es: "GNC",   en: "CNG",     fr: "GNV",     de: "Erdgas" },
    electrico:  { it: "Elettrico", es: "Eléctrico", en: "Electric", fr: "Électrique", de: "Elektro" },
    hibrido:    { it: "Ibrido",  es: "Híbrido",  en: "Hybrid",  fr: "Hybride", de: "Hybrid" },
    "nafta + gpl": { it: "Benzina/GPL", es: "Nafta + GPL", en: "Petrol + LPG", fr: "Essence + GPL", de: "Benzin + Autogas (LPG)" },
  },
  transmision: {
    manual:      { it: "Manuale",    es: "Manual",     en: "Manual",    fr: "Manuelle",  de: "Schaltgetriebe" },
    automatica:  { it: "Automatico", es: "Automática", en: "Automatic", fr: "Automatique", de: "Automatik" },
  },
  resultado: {
    regular:     { it: "Regolare",   es: "Regular",    en: "Passed",    fr: "Conforme",  de: "Bestanden" },
    "no regular": { it: "Non regolare", es: "No regular", en: "Failed", fr: "Non conforme", de: "Nicht bestanden" },
  },
  color: {
    blanco:    { it: "Bianco",  es: "Blanco",   en: "White",  fr: "Blanc",   de: "Weiß" },
    negro:     { it: "Nero",    es: "Negro",    en: "Black",  fr: "Noir",    de: "Schwarz" },
    gris:      { it: "Grigio",  es: "Gris",     en: "Grey",   fr: "Gris",    de: "Grau" },
    plateado:  { it: "Argento", es: "Plateado", en: "Silver", fr: "Argent",  de: "Silber" },
    rojo:      { it: "Rosso",   es: "Rojo",     en: "Red",    fr: "Rouge",   de: "Rot" },
    azul:      { it: "Blu",     es: "Azul",     en: "Blue",   fr: "Bleu",    de: "Blau" },
    verde:     { it: "Verde",   es: "Verde",    en: "Green",  fr: "Vert",    de: "Grün" },
    beige:     { it: "Beige",   es: "Beige",    en: "Beige",  fr: "Beige",   de: "Beige" },
  },
  carroceria: {
    hatchback:  { it: "Hatchback (2 volumi)", es: "Hatchback (dos volúmenes)", en: "Hatchback", fr: "Citadine (2 volumes)", de: "Hatchback (Kombilimousine)" },
    sedan:      { it: "Berlina",     es: "Sedán",      en: "Sedan",     fr: "Berline",   de: "Limousine" },
    suv:        { it: "SUV",         es: "SUV",        en: "SUV",       fr: "SUV",       de: "SUV" },
    familiar:   { it: "Station wagon", es: "Familiar/Rural", en: "Estate/Wagon", fr: "Break", de: "Kombi" },
  },
  pais: {
    italia:     { it: "Italia",      es: "Italia",     en: "Italy",     fr: "Italie",    de: "Italien" },
    argentina:  { it: "Argentina",   es: "Argentina",  en: "Argentina", fr: "Argentine", de: "Argentinien" },
  },
  estadopago: {
    pagado:      { it: "Pagato",       es: "Pagado",       en: "Paid",        fr: "Payée",         de: "Bezahlt" },
    "no pagado": { it: "Non pagato",   es: "No pagado",    en: "Unpaid",      fr: "Non payée",     de: "Nicht bezahlt" },
  },
  estadoseguro: {
    asegurado:      { it: "Assicurato",     es: "Asegurado",     en: "Insured",     fr: "Assuré",        de: "Versichert" },
    "no asegurado": { it: "Non assicurato", es: "No asegurado",  en: "Not insured", fr: "Non assuré",    de: "Nicht versichert" },
  },
  tipocubierta: {
    "4 estaciones": { it: "4 stagioni",  es: "4 estaciones", en: "All-season", fr: "4 saisons",  de: "Ganzjahresreifen" },
    verano:         { it: "Estive",      es: "Verano",       en: "Summer",     fr: "Été",        de: "Sommerreifen" },
    invierno:       { it: "Invernali",   es: "Invierno",     en: "Winter",     fr: "Hiver",      de: "Winterreifen" },
  },
};

const I18N = {
  LANGS: IDIOMAS,
  LANG_NAMES: NOMBRE_IDIOMA,

  getLang() {
    const guardado = localStorage.getItem("idioma");
    return IDIOMAS.includes(guardado) ? guardado : "it";
  },

  setLang(lang) {
    if (IDIOMAS.includes(lang)) {
      localStorage.setItem("idioma", lang);
      location.reload();
    }
  },

  // Texto fijo de interfaz
  t(clave) {
    const entrada = UI[clave];
    if (!entrada) return clave;
    return entrada[this.getLang()] || entrada.it || entrada.es || clave;
  },

  // Texto cargado por vos (resumen, descripción) guardado como { es: "...", it: "..." }
  // Si falta en el idioma actual, cae a italiano, después español, después lo que haya.
  pickLocalized(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj; // compatibilidad si cargan texto plano
    const lang = this.getLang();
    return obj[lang] || obj.it || obj.es || obj.en || obj.fr || obj.de || Object.values(obj)[0] || "";
  },

  // Igual que pickLocalized pero para listas (equipamiento, comentarios en viñetas).
  // Ejemplo: { es: ["ABS", "Bluetooth"] } -> ["ABS", "Bluetooth"]
  pickLocalizedList(obj) {
    if (!obj) return [];
    if (Array.isArray(obj)) return obj; // compatibilidad si cargan un array plano
    const lang = this.getLang();
    return obj[lang] || obj.it || obj.es || obj.en || obj.fr || obj.de || Object.values(obj)[0] || [];
  },

  // "Sí" / "No" traducido, a partir de un valor booleano o "si"/"no"/"sí".
  siNo(valor) {
    if (valor === null || valor === undefined || valor === "") return "";
    const positivo = valor === true || /^s(i|í)$/i.test(String(valor).trim());
    return this.t(positivo ? "si" : "no");
  },

  // Traduce valores tipo "Nafta", "Manual", "Blanco" usando el diccionario;
  // si no lo encuentra, muestra el valor tal cual lo cargaste.
  translateValue(campo, valorOriginal) {
    if (!valorOriginal) return "";
    const dic = VALOR_DICC[campo];
    if (!dic) return valorOriginal;
    const clave = valorOriginal
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // saca acentos: "Diésel" -> "diesel"
    const entrada = dic[clave];
    if (!entrada) return valorOriginal;
    return entrada[this.getLang()] || valorOriginal;
  },
};

// Pinta el selector de idioma en cualquier página que tenga #lang-switch
function pintarSelectorIdioma() {
  const cont = document.getElementById("lang-switch");
  if (!cont) return;
  const actual = I18N.getLang();
  cont.innerHTML = IDIOMAS.map(
    (code) =>
      `<button class="lang-btn${code === actual ? " lang-btn--activo" : ""}" data-lang="${code}" title="${NOMBRE_IDIOMA[code]}"><span class="lang-btn__bandera">${BANDERA_IDIOMA[code]}</span> ${code.toUpperCase()}</button>`
  ).join("");
  cont.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => I18N.setLang(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", pintarSelectorIdioma);
