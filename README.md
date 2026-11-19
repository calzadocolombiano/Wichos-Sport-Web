# Wicho's Sport — Vitrina digital

Sitio estático desarrollado con HTML, CSS y JavaScript. No necesita backend ni base de datos para funcionar.

## Abrir en tu computador
1. Descomprime `wichos-sport-web.zip`.
2. Abre la carpeta `wichos-sport-web`.
3. Haz doble clic en `index.html` para previsualizarlo en el navegador.

## Publicar gratis con GitHub Pages
1. Crea o inicia sesión en https://github.com/.
2. Crea un repositorio nuevo, por ejemplo `wichos-sport-web`.
3. Sube el contenido de esta carpeta (no solamente el ZIP): `index.html`, `css`, `js` y `assets`.
4. En el repositorio entra a **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
7. Espera unos minutos. GitHub mostrará la dirección pública del sitio en esa misma sección.

## Cambiar el WhatsApp
Abre `js/config.js`. El número debe escribirse con indicativo de país, sin `+`, espacios ni guiones. Colombia: `57` + número. El número actual está configurado como `573125505085`. Verifica con la empresa que esa línea esté activa y autorizada para recibir consultas comerciales.

## Actualizar redes o dirección
Edita los enlaces de Instagram, TikTok y la dirección en `index.html`. Revisa la dirección antes de publicar.

## Cambiar productos
Las fotos seleccionadas están en `assets/products/`. Para cambiar una:
- Reemplaza el archivo conservando el mismo nombre, o
- Cambia la ruta `src` y el atributo `data-image` del botón correspondiente en `index.html`.

Los nombres visibles son denominaciones descriptivas provisionales, no referencias oficiales. Verifica materiales, tallas, precios y disponibilidad con la empresa antes de agregarlos.

## Cambiar fotos del proceso
Las imágenes están en `assets/process/`. Reemplaza los archivos manteniendo sus nombres o modifica las rutas en `index.html`.

## Antes de entregar/publicar
- Confirmar con la empresa la versión del logo y su uso.
- Validar historia, misión y visión.
- Confirmar que el número de WhatsApp sea comercial y tenga WhatsApp activo.
- Validar dirección y enlaces sociales.
- Confirmar que las fotos pueden publicarse.
- Confirmar materiales y nombres de productos. No se muestran precios porque no se suministraron.
- Revisar la página desde un celular.

## Notas
- La historia incluye cifras históricas relatadas por la empresa; no representan la capacidad productiva actual.
- La página es una vitrina de presentación y contacto, no una tienda con carrito, inventario o pagos.
- El sitio usa Google Fonts; si el visitante no tiene conexión, se aplicarán fuentes de respaldo del sistema.
