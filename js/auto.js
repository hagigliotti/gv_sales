// ============================================
// Lógica de la página de ficha completa (auto.html)
// ============================================

const formatoPrecioFicha = (valor, moneda) =>
  new Intl.NumberFormat(I18N.getLang(), {
    style: "currency",
    currency: moneda || "EUR",
    maximumFractionDigits: 0,
  }).format(valor);

const formatoKmFicha = (km) => `${new Intl.NumberFormat(I18N.getLang()).format(km)} km`;

function mensajeWhatsappFicha(auto) {
  const lang = I18N.getLang();
  const fn = SITE_CONFIG.mensajeWhatsapp[lang] || SITE_CONFIG.mensajeWhatsapp.it;
  return fn(auto);
}

// Arma una fila "etiqueta: valor" para las dl.specs. Si el valor está vacío, no la muestra.
function filaSpec(etiquetaClave, valor) {
  if (valor === undefined || valor === null || valor === "") return "";
  return `<div><dt>${I18N.t(etiquetaClave)}</dt><dd>${valor}</dd></div>`;
}

// Envuelve cualquier contenido en un bloque plegable (acordeón).
// abierto=true lo muestra expandido de entrada; el resto arrancan cerrados.
function bloque(tituloClave, contenidoHtml, abierto = false) {
  if (!contenidoHtml) return "";
  return `
    <details class="bloque"${abierto ? " open" : ""}>
      <summary class="bloque__resumen">${I18N.t(tituloClave)}</summary>
      <div class="bloque__contenido">${contenidoHtml}</div>
    </details>
  `;
}

// Arma una sección (bloque plegable con dl.specs) solo si tiene al menos una fila con datos.
function seccionSpecs(tituloClave, filasHtml, abierto = false) {
  const filas = filasHtml.filter(Boolean);
  if (!filas.length) return "";
  return bloque(tituloClave, `<dl class="specs specs--ficha">${filas.join("")}</dl>`, abierto);
}

// Arma una lista de chips de equipamiento (solo si hay items)
function listaEquipamiento(tituloClave, items) {
  if (!items || !items.length) return "";
  return `
    <div class="equipo__grupo">
      <h3 class="equipo__titulo">${I18N.t(tituloClave)}</h3>
      <ul class="equipo__lista">
        ${items.map((i) => `<li>${i}</li>`).join("")}
      </ul>
    </div>
  `;
}

function pintarCarrusel(fotos) {
  let indice = 0;

  const html = `
    <div class="carrusel">
      <div class="carrusel__principal">
        <button class="carrusel__flecha carrusel__flecha--izq" aria-label="Anterior">‹</button>
        <img id="carrusel-img" src="${fotos[0]}" alt="" />
        <button class="carrusel__flecha carrusel__flecha--der" aria-label="Siguiente">›</button>
      </div>
      ${
        fotos.length > 1
          ? `<div class="carrusel__miniaturas">
              ${fotos
                .map(
                  (f, i) =>
                    `<button class="miniatura${i === 0 ? " miniatura--activa" : ""}" data-i="${i}">
                      <img src="${f}" alt="" />
                    </button>`
                )
                .join("")}
            </div>`
          : ""
      }
    </div>
  `;

  const cont = document.createElement("div");
  cont.innerHTML = html;
  const wrapper = cont.firstElementChild;

  const imgPrincipal = wrapper.querySelector("#carrusel-img");
  const miniaturas = wrapper.querySelectorAll(".miniatura");

  function mostrar(i) {
    indice = (i + fotos.length) % fotos.length;
    imgPrincipal.src = fotos[indice];
    miniaturas.forEach((m, mi) => m.classList.toggle("miniatura--activa", mi === indice));
  }

  wrapper.querySelector(".carrusel__flecha--izq").addEventListener("click", () => mostrar(indice - 1));
  wrapper.querySelector(".carrusel__flecha--der").addEventListener("click", () => mostrar(indice + 1));
  miniaturas.forEach((m) => m.addEventListener("click", () => mostrar(Number(m.dataset.i))));

  return wrapper;
}

function pintarFicha(auto) {
  const vendido = auto.estado === "vendido";
  const descripcion = I18N.pickLocalized(auto.descripcion) || I18N.pickLocalized(auto.resumen);

  const b = auto.datosBasicos || {};
  const h = auto.historial || {};
  const t = auto.datosTecnicos || {};
  const c = auto.colorTapiceria || {};
  const eq = auto.equipamiento || {};
  const mant = auto.mantenimiento || [];

  const cont = document.getElementById("contenido-ficha");
  cont.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "ficha";

  const colFotos = document.createElement("div");
  colFotos.className = "ficha__fotos";
  colFotos.appendChild(pintarCarrusel(auto.fotos && auto.fotos.length ? auto.fotos : ["images/placeholder.svg"]));

  const colInfo = document.createElement("div");
  colInfo.className = "ficha__info";

  const seccionBasicos = seccionSpecs("sec_basicos", [
    filaSpec("carroceria", I18N.translateValue("carroceria", b.carroceria)),
    filaSpec("condicion_venta", b.condicionVenta),
    filaSpec("traccion", b.traccion),
    filaSpec("plazas", b.plazas),
    filaSpec("puertas", b.puertas),
  ]);

  const seccionHistorial = seccionSpecs("sec_historial", [
    filaSpec("primera_matriculacion", h.primeraMatriculacion),
    filaSpec("ultima_revision", h.ultimaRevision),
    filaSpec("revision_hasta", h.revisionValidaHasta),
    filaSpec("propietarios", h.propietariosAnteriores),
    filaSpec("guia_mant", h.guiaMantenimiento === "" ? "" : I18N.siNo(h.guiaMantenimiento)),
    filaSpec("no_fumadores", h.noFumadores === "" ? "" : I18N.siNo(h.noFumadores)),
    filaSpec("kit_distribucion", h.kitDistribucion),
    filaSpec("filtro_habitaculo", h.filtroAireHabitaculo),
    filaSpec("cambio_aceite", h.cambioAceite),
    filaSpec("cambio_embrague", h.cambioEmbrague),
    filaSpec("tipo_cubiertas", I18N.translateValue("tipocubierta", h.tipoCubiertas)),
    filaSpec("medidas_cubiertas", I18N.pickLocalized(h.medidasCubiertas)),
    filaSpec("cambio_cubiertas", h.cambioCubiertas),
    filaSpec("escobillas", I18N.pickLocalized(h.escobillas)),
    filaSpec("testigos_tablero", h.testigosTablero),
    filaSpec("numero_llaves", h.numeroLlaves),
    filaSpec("pais_origen", I18N.translateValue("pais", h.paisOrigen)),
    filaSpec("aseguradora", h.aseguradora),
    filaSpec("seguro_hasta", h.seguroValidoHasta),
    filaSpec("seguro_estado", I18N.translateValue("estadoseguro", h.seguroEstado)),
    filaSpec("bollo_estado", I18N.translateValue("estadopago", h.bolloEstado)),
    filaSpec("bollo_hasta", h.bolloValidoHasta),
  ]);

  const seccionTecnicos = seccionSpecs("sec_tecnicos", [
    filaSpec("potencia", t.potencia),
    filaSpec("cilindrada", t.cilindrada),
    filaSpec("velocidades_caja", I18N.pickLocalized(t.velocidadesCaja)),
    filaSpec("cilindros", t.cilindros),
    filaSpec("tara", t.tara),
    filaSpec("consumo_mixto", t.consumoMixto),
    filaSpec("autonomia_gpl", t.autonomiaGPL),
    filaSpec("emisiones_co2", t.emisionesCO2),
    filaSpec("clase_emision", t.claseEmision),
    filaSpec("clase_ambiental", t.claseAmbiental),
    filaSpec("precio_lista_original", t.precioListaOriginal),
  ]);

  const seccionColor = seccionSpecs("sec_color", [
    filaSpec("color_exterior", c.colorExterior),
    filaSpec("acabado_pintura", c.acabadoPintura),
    filaSpec("color_interior", c.colorInterior),
    filaSpec("tapiceria", c.tapiceria),
  ]);

  const mi = auto.multimediaInstalada || {};
  const seccionMultimediaInstalada = seccionSpecs("sec_multimedia_instalada", [
    filaSpec("mi_marca", mi.marca),
    filaSpec("mi_modelo", mi.modelo),
    filaSpec("mi_pantalla", mi.tamanoPantalla),
    filaSpec("mi_so", mi.sistemaOperativo),
    filaSpec("mi_memoria", mi.memoria),
    filaSpec("mi_conectividad", I18N.pickLocalized(mi.conectividad)),
    filaSpec("mi_notas", I18N.pickLocalized(mi.notas)),
  ]);

  const accesorios = auto.accesoriosInstalados || [];
  const seccionAccesorios = accesorios.length
    ? bloque(
        "sec_accesorios",
        `<div class="accesorios">
          ${accesorios
            .map((a) => {
              const nombre = I18N.pickLocalized(a.nombre);
              const descripcion = I18N.pickLocalized(a.descripcion);
              return `
                <div class="accesorio">
                  <h3 class="accesorio__titulo">${nombre}</h3>
                  <dl class="specs specs--ficha">
                    ${filaSpec("acc_marca", a.marca)}
                    ${filaSpec("acc_modelo", a.modelo)}
                  </dl>
                  ${descripcion ? `<p class="accesorio__descripcion">${descripcion}</p>` : ""}
                </div>
              `;
            })
            .join("")}
        </div>`
      )
    : "";

  const gruposEquipo = [
    listaEquipamiento("eq_comodidad", I18N.pickLocalizedList(eq.comodidad)),
    listaEquipamiento("eq_multimedia", I18N.pickLocalizedList(eq.multimedia)),
    listaEquipamiento("eq_seguridad", I18N.pickLocalizedList(eq.seguridad)),
    listaEquipamiento("eq_extra", I18N.pickLocalizedList(eq.extra)),
  ].filter(Boolean);

  const seccionEquipo = gruposEquipo.length
    ? bloque("sec_equipamiento", `<div class="equipo">${gruposEquipo.join("")}</div>`)
    : "";

  const noIncluidoItems = I18N.pickLocalizedList(auto.noIncluido);
  const seccionNoIncluido = noIncluidoItems.length
    ? bloque(
        "sec_no_incluido",
        `<ul class="equipo__lista equipo__lista--no-incluido">
          ${noIncluidoItems.map((i) => `<li>${i}</li>`).join("")}
        </ul>`
      )
    : "";

  const seccionMantenimiento = mant.length
    ? bloque(
        "sec_mantenimiento",
        `<div class="timeline">
          ${mant
            .map(
              (m) => `
            <div class="timeline__item">
              <div class="timeline__fecha">${m.fecha || ""}</div>
              <div class="timeline__detalle">
                <div>${m.lugar || ""}</div>
                ${m.km ? `<div class="timeline__km">${I18N.t("km_evento")}: ${formatoKmFicha(m.km)}</div>` : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>`
      )
    : "";

  const revisiones = h.revisionesTecnicas || [];
  const notaMatriculaTexto = I18N.pickLocalized(h.notaMatricula);
  const seccionRevisiones = revisiones.length
    ? bloque(
        "sec_revisiones",
        `<div class="timeline">
          ${revisiones
            .map(
              (r) => `
            <div class="timeline__item">
              <div class="timeline__fecha">${r.fecha || ""}</div>
              <div class="timeline__detalle">
                <div>${I18N.t("resultado")}: ${I18N.translateValue("resultado", r.resultado)}${r.nota ? ` — ${r.nota}` : ""}</div>
                ${r.km ? `<div class="timeline__km">${I18N.t("km_evento")}: ${formatoKmFicha(r.km)}</div>` : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>
        ${notaMatriculaTexto ? `<p class="ficha__nota">${notaMatriculaTexto}</p>` : ""}`
      )
    : "";

  colInfo.innerHTML = `
    <div class="lote">${I18N.t("lote")} ${auto.id}</div>
    <h1 class="ficha__titulo">${auto.marca} ${auto.modelo} ${vendido ? `· <span class="ficha__vendido">${I18N.t("vendido_tag")}</span>` : ""}</h1>
    <div class="ficha__precio">${formatoPrecioFicha(auto.precio, auto.moneda)}</div>

    ${bloque(
      "specs_titulo",
      `<dl class="specs specs--ficha">
        ${filaSpec("anio", auto.anio)}
        ${filaSpec("km", formatoKmFicha(auto.km))}
        ${filaSpec("caja", I18N.translateValue("transmision", auto.transmision))}
        ${filaSpec("combustible", I18N.translateValue("combustible", auto.combustible))}
        ${filaSpec("color", I18N.translateValue("color", auto.color))}
      </dl>`,
      true
    )}
    ${seccionBasicos}
    ${seccionTecnicos}
    ${seccionColor}
    ${seccionMultimediaInstalada}
    ${seccionAccesorios}
    ${seccionHistorial}
    ${seccionEquipo}
    ${seccionNoIncluido}
    ${seccionMantenimiento}
    ${seccionRevisiones}
    ${descripcion ? bloque("sec_comentarios", `<p class="ficha__descripcion">${descripcion}</p>`, true) : ""}

    <div class="ficha__cta">
      ${
        vendido
          ? `<span class="btn btn--disabled">${I18N.t("no_disponible")}</span>`
          : `<a class="btn btn--accent" href="https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(mensajeWhatsappFicha(auto))}" target="_blank" rel="noopener">${I18N.t("consultar_whatsapp")}</a>`
      }
    </div>
  `;

  layout.appendChild(colFotos);
  layout.appendChild(colInfo);
  cont.appendChild(layout);

  document.title = `${auto.marca} ${auto.modelo} — ${SITE_CONFIG.nombreSitio}`;
}

async function initFicha() {
  document.getElementById("site-nombre").textContent = SITE_CONFIG.nombreSitio;
  document.getElementById("txt-volver").textContent = I18N.t("volver");
  document.getElementById("footer-aviso-2").textContent = I18N.t("footer_aviso");

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const cont = document.getElementById("contenido-ficha");

  try {
    const res = await fetch("data/listings.json");
    const autos = await res.json();
    const auto = autos.find((a) => a.id === id);
    if (!auto) {
      cont.innerHTML = `<p class="vacio">${I18N.t("auto_no_encontrado")}</p>`;
      return;
    }
    pintarFicha(auto);
  } catch (err) {
    cont.innerHTML = `<p class="vacio">${I18N.t("error_carga")}</p>`;
  }
}

initFicha();
