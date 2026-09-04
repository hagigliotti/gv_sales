# Lote 12 — sitio de venta de autos

Sitio estático (HTML/CSS/JS puro, sin frameworks ni instalación) para mostrar
tus autos en venta y que la gente te contacte por WhatsApp. Pensado para
hospedarse gratis en **GitHub Pages**.

## Estructura

```
index.html            → portada con el catálogo
auto.html              → ficha completa de un auto (carrusel + detalle)
css/styles.css          → estilos
js/i18n.js               → idiomas (IT/ES/EN/FR/DE) — no hace falta tocarlo
js/config.js             → tus datos: nombre del sitio, WhatsApp, email, eslogan
js/app.js                → arma la portada (no hace falta tocarlo)
js/auto.js               → arma la ficha completa (no hace falta tocarlo)
data/listings.json       → TUS AUTOS. Acá es donde vas a trabajar día a día
images/                  → una carpeta POR AUTO con sus fotos
```

## 1. Publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `mi-garage`), público.
2. Subí todo el contenido de esta carpeta a la raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/mi-garage.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Build and deployment → Source: "Deploy
   from a branch"**, elegí la rama `main` y la carpeta `/ (root)`. Guardá.
4. En un par de minutos tu sitio va a estar en
   `https://TU-USUARIO.github.io/mi-garage/`.

## 2. Configurar tus datos generales

Abrí `js/config.js` y cambiá:
- `whatsapp`: tu número con código de país, sin `+` ni espacios (ej. Italia: `393511234567`).
- `email`, `ciudad`, `nombreSitio`.
- `eslogan`: frase corta debajo del logo. Podés escribirla en varios idiomas
  (`it`, `es`, `en`, `fr`, `de`) o dejar solo uno — si falta un idioma, se
  usa el italiano.

## 3. Idiomas del sitio

El sitio se muestra en **italiano por defecto**, y arriba a la derecha hay
un selector (IT · ES · EN · FR · DE) para cambiar de idioma — útil también
para vos cuando estés revisando cómo quedó cargado un auto.

Hay dos tipos de texto:

- **Textos fijos de la interfaz** ("Consultar por WhatsApp", "Año", "Ficha
  técnica", etc.): ya están traducidos a los 5 idiomas en `js/i18n.js`. No
  hace falta que hagas nada.
- **Valores que vos cargás** (combustible, transmisión, color): si escribís
  cosas comunes como `Nafta`, `Manual`, `Diesel`, `Blanco`, `Negro`, etc.,
  el sitio las traduce automáticamente en los otros idiomas. Si escribís
  algo distinto, se muestra tal cual lo pusiste (en todos los idiomas).
- **Resumen y descripción de cada auto**: como es texto libre, no se puede
  traducir solo. Podés cargarlo directamente en español (`"es"`) — así te
  resulta cómodo — y el sitio lo va a mostrar en español para cualquier
  visitante, mientras no cargues el resto de los idiomas. Si más adelante
  querés que la ficha de un auto se vea también en italiano, inglés, etc.,
  agregás esas claves dentro del mismo campo (ver ejemplo abajo).

## 4. Cargar/editar autos

Todo pasa por `data/listings.json`. Cada auto tiene datos básicos (marca,
modelo, precio, km...) y además, opcionalmente, una ficha extendida como la
de un concesionario grande: datos básicos (carrocería, tracción, plazas),
historial (matriculación, revisiones, dueños anteriores, cambios de kit de
distribución/embrague/cubiertas/aceite), datos técnicos (potencia, cilindrada,
consumo, emisiones), color y tapicería, equipamiento (comodidad, multimedia,
seguridad, extra) e historial de mantenimiento con fecha/taller/km.

Mirá el auto de ejemplo (`0001`, Citroën C3 blanco) en el archivo para ver el
formato completo — todos sus valores dicen "Ej: ..." a propósito, para que
sepas qué tipo de dato va en cada campo. Reemplazalos por los reales de tu
auto. **Ninguna sección es obligatoria**: si un campo lo dejás vacío (`""`)
o borrás la sección entera, esa parte simplemente no se muestra en la ficha.

### Pantalla multimedia instalada (tablero reemplazado)

Si le cambiaste el tablero original por uno con pantalla táctil, cargá sus
datos en `"multimediaInstalada"`: marca, modelo, tamaño de pantalla, sistema
operativo, memoria y conectividad (Android Auto, Apple CarPlay, cámara de
retroceso, etc.). Pasame el link del producto (por ejemplo de AliExpress)
cuando lo tengas y completo esos datos por vos.

⚠️ **Privacidad**: no cargues la matrícula/targa ni el número de inventario
en ningún campo que se muestre públicamente. Guardalos aparte (en una nota
tuya, no en este archivo) y compartilos solo por WhatsApp con compradores
serios. Publicar la matrícula permite que cualquiera consulte datos del
vehículo o del seguro en portales oficiales.

Para el auto más simple, alcanza con:

```json
{
  "id": "0005",
  "categoria": "auto",
  "destacado": false,
  "estado": "disponible",
  "marca": "Toyota",
  "modelo": "Corolla XEI",
  "anio": 2021,
  "precio": 15500,
  "moneda": "EUR",
  "km": 30000,
  "combustible": "Nafta",
  "transmision": "Automática",
  "color": "Negro",
  "resumen": { "es": "Frase corta que se ve en la tarjeta de la portada." },
  "descripcion": { "es": "Texto más largo que se ve en la ficha completa." },
  "fotos": ["images/toyota-corolla-negro/1.jpg"]
}
```

- Para **agregar** un auto: copiá un bloque `{ ... }`, pegalo dentro de los
  corchetes (separado por coma), y cambiá los datos.
- Para **sacar** un auto: borrá su bloque completo.
- Para marcarlo como vendido: cambiá `"estado": "disponible"` por `"estado": "vendido"`
  (se sigue mostrando, pero tachado y sin botón de WhatsApp).
- `"destacado": true` en un solo auto hace que aparezca arriba de todo, grande.
- El `id` es el "número de lote" — usalo también como referencia para vos.
- `"fotos"` es una lista: la **primera** foto es la que se ve en la portada;
  al hacer clic se abre `auto.html` con el carrusel completo de todas las
  fotos de esa lista.

⚠️ Cuidado con las **comas**: es JSON, cada campo termina en coma excepto el
último de cada bloque, y cada auto termina en coma excepto el último de la
lista. Si el sitio deja de cargar autos, pegá el archivo en
https://jsonlint.com para revisarlo.

## 5. Fotos: una carpeta por auto

Cada auto tiene su propia carpeta dentro de `images/`, por ejemplo:

```
images/
  citroen-c3-blanco/
    1.jpg
    2.jpg
    3.jpg
  citroen-c3-negro/
    1.jpg
    2.jpg
```

Para un auto nuevo: creá una carpeta con un nombre corto y sin espacios
(ej. `images/peugeot-208-rojo/`), subí ahí las fotos, y poné esas rutas en
el campo `"fotos"` del auto en `listings.json`.

Podés usar **.jpg, .jpeg o .png** sin problema, la que te resulte más
cómoda — el sitio no distingue el formato, solo necesita que la ruta en
`"fotos"` coincida exactamente con el nombre del archivo (mayúsculas y
extensión incluidas).

## 6. Cómo probarlo en tu computadora antes de subirlo

Como el sitio carga `data/listings.json` con `fetch`, abrir `index.html`
directamente haciendo doble clic no va a funcionar (los navegadores bloquean
esa carga por seguridad). Necesitás un servidor local simple:

```bash
# Parado dentro de la carpeta del proyecto
python3 -m http.server 8000
```

Y después abrís `http://localhost:8000` en el navegador.

## 7. Cómo crece esto a futuro

Cuando quieras sumar otro rubro (servicios, otros productos):
- El campo `"categoria"` en cada item ya está pensado para eso (hoy todos
  son `"auto"`).
- En el menú de arriba ya dejé "Servizi" / "Altri settori" como próximamente
  — cuando llegue el momento, armamos esa sección nueva reutilizando la
  misma base (mismo diseño, sistema de idiomas y estructura de datos).
