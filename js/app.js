// ============================================
// Renderiza el catálogo (portada) a partir de data/listings.json
// No hace falta tocar este archivo para agregar autos:
// eso se hace en data/listings.json
// ============================================

const formatoPrecio = (valor, moneda) =>
  new Intl.NumberFormat(I18N.getLang(), {
    style: "currency",
    currency: moneda || "EUR",
    maximumFractionDigits: 0,
  }).format(valor);

const formatoKm = (km) => `${new Intl.NumberFormat(I18N.getLang()).format(km)} km`;

function mensajeWhatsapp(auto) {
  const lang = I18N.getLang();
  const fn = SITE_CONFIG.mensajeWhatsapp[lang] || SITE_CONFIG.mensajeWhatsapp.it;
  return fn(auto);
}

function linkWhatsapp(auto) {
  const texto = encodeURIComponent(mensajeWhatsapp(auto));
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${texto}`;
}

function fichaUrl(auto) {
  return `auto.html?id=${encodeURIComponent(auto.id)}`;
}

function crearFicha(auto, esDestacado = false) {
  const vendido = auto.estado === "vendido";
  const resumen = I18N.pickLocalized(auto.resumen);
  const fotoPrincipal = auto.fotos && auto.fotos[0];

  const tpl = document.createElement(esDestacado ? "div" : "article");
  tpl.className = esDestacado
    ? "destacado"
    : `card${vendido ? " card--vendido" : ""}`;

  tpl.innerHTML = `
    <a class="${esDestacado ? "destacado__foto" : "card__foto"}" href="${fichaUrl(auto)}" aria-label="${I18N.t("ver_ficha")}: ${auto.marca} ${auto.modelo}">
      <img src="${fotoPrincipal}" alt="${auto.marca} ${auto.modelo}" loading="lazy" />
      ${vendido ? `<span class="tag tag--vendido">${I18N.t("vendido_tag")}</span>` : ""}
    </a>
    <div class="${esDestacado ? "destacado__info" : "card__info"}">
      <div class="lote">${I18N.t("lote")} ${auto.id}</div>
      <h3 class="${esDestacado ? "destacado__titulo" : "card__titulo"}">
        <a href="${fichaUrl(auto)}">${auto.marca} ${auto.modelo}</a>
      </h3>
      <dl class="specs">
        <div><dt>${I18N.t("anio")}</dt><dd>${auto.anio}</dd></div>
        <div><dt>${I18N.t("km")}</dt><dd>${formatoKm(auto.km)}</dd></div>
        <div><dt>${I18N.t("caja")}</dt><dd>${I18N.translateValue("transmision", auto.transmision)}</dd></div>
        <div><dt>${I18N.t("combustible")}</dt><dd>${I18N.translateValue("combustible", auto.combustible)}</dd></div>
      </dl>
      ${resumen ? `<p class="descripcion">${resumen}</p>` : ""}
      <div class="${esDestacado ? "destacado__pie" : "card__pie"}">
        <span class="precio">${formatoPrecio(auto.precio, auto.moneda)}</span>
        <div class="pie__botones">
          <a class="btn btn--outline" href="${fichaUrl(auto)}">${I18N.t("ver_ficha")}</a>
          ${
            vendido
              ? `<span class="btn btn--disabled">${I18N.t("no_disponible")}</span>`
              : `<a class="btn btn--accent" href="${linkWhatsapp(auto)}" target="_blank" rel="noopener">${I18N.t("consultar_whatsapp")}</a>`
          }
        </div>
      </div>
    </div>
  `;
  return tpl;
}

function traducirEstaticos() {
  document.getElementById("nav-autos").textContent = I18N.t("nav_autos");
  document.getElementById("nav-servicios").textContent = I18N.t("nav_servicios");
  document.getElementById("nav-otros").textContent = I18N.t("nav_otros");
  document.querySelectorAll(".nav__link--proximo").forEach((el) => (el.title = I18N.t("proximamente")));
  document.getElementById("stock-titulo").textContent = I18N.t("stock_titulo");
  document.getElementById("stock-nota").textContent = I18N.t("stock_nota");
  document.getElementById("footer-aviso").textContent = I18N.t("footer_aviso");
  document.getElementById("footer-whatsapp").textContent = I18N.t("escribir_whatsapp");
}

async function init() {
  traducirEstaticos();

  document.getElementById("site-nombre").textContent = SITE_CONFIG.nombreSitio;
  document.getElementById("site-nombre-footer").textContent = SITE_CONFIG.nombreSitio;
  document.getElementById("site-eslogan").textContent = I18N.pickLocalized(SITE_CONFIG.eslogan);
  document.getElementById("site-ciudad").textContent = SITE_CONFIG.ciudad;
  document.getElementById("site-email").textContent = SITE_CONFIG.email;
  document.getElementById("site-email").href = `mailto:${SITE_CONFIG.email}`;
  document.getElementById("footer-whatsapp").href = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  const grid = document.getElementById("grid");
  const destacadoWrap = document.getElementById("destacado-wrap");
  const vacio = document.getElementById("vacio");

  let autos = [];
  try {
    const res = await fetch("data/listings.json");
    autos = await res.json();
  } catch (err) {
    vacio.hidden = false;
    vacio.textContent = I18N.t("error_carga");
    return;
  }

  if (!autos.length) {
    vacio.hidden = false;
    vacio.textContent = I18N.t("vacio");
    return;
  }

  const destacado = autos.find((a) => a.destacado && a.estado !== "vendido") || autos[0];
  destacadoWrap.appendChild(crearFicha(destacado, true));

  autos
    .filter((a) => a.id !== destacado.id)
    .forEach((auto) => grid.appendChild(crearFicha(auto)));
}

init();
