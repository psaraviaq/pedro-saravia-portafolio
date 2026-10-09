# Hola, soy Pedro Saravia

Soy desarrollador Full Stack Java y este es mi espacio para compartir en qué estoy trabajando, qué he aprendido y cómo me acerco al desarrollo de software. Aquí encontrarás una selección de proyectos, mi recorrido y formas de ponerte en contacto conmigo.

## Visita el portafolio

Puedes ver el sitio publicado aquí: [psaraviaq.github.io/pedro-saravia-portafolio](https://psaraviaq.github.io/pedro-saravia-portafolio/).

## Sobre este sitio

Quise mantener el sitio claro, fácil de recorrer y adaptable a distintos dispositivos. Lo construí como una página estática con HTML, CSS y JavaScript; no necesita un proceso de compilación ni dependencias locales. Bootstrap 5.3.3 y las tipografías de Google Fonts se cargan desde CDN.

En el sitio encontrarás:

- Navegación por secciones y menú adaptable a dispositivos móviles.
- Alternancia entre tema claro y oscuro, con preferencia guardada en el navegador.
- Secciones de perfil, proyectos, habilidades, experiencia, educación y contacto.
- Formulario de contacto preparado para integrarse con Formspree.
- Diseño adaptable y enlace para saltar directamente al contenido.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3 (CDN)
- Google Fonts: Manrope y DM Sans
- Formspree (integración opcional para el formulario)

## Ejecutar localmente

No necesitas instalar paquetes. Puedes abrir `index.html` directamente en el navegador. Para probarlo mediante un servidor local, ejecuta desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego visita [http://localhost:8000](http://localhost:8000).

## Antes de publicar

Todavía hay algunos textos y enlaces de ejemplo. Antes de compartir el sitio, actualiza en `index.html`:

- Los nombres, descripciones, tecnologías y enlaces de tus proyectos.
- Las fechas, responsabilidades y logros de experiencia y educación.
- Las habilidades y herramientas que correspondan a tu experiencia.
- Los enlaces de LinkedIn y GitHub, y el correo de contacto.
- La imagen del encabezado, sustituyendo la URL de ejemplo por una imagen propia.

También puedes activar el formulario de contacto creando uno en Formspree y reemplazando `YOUR_FORM_ID` en el atributo `action` con tu identificador. Mientras no lo configures, el formulario avisará que no puede enviar mensajes.

## Publicación

Cuando esté listo para publicarse, puedo desplegarlo en un servicio de hosting estático como GitHub Pages, Netlify o Vercel. No necesita un backend propio. Los archivos `index.html`, `styles.css` y `script.js` deben permanecer en la misma carpeta; el sitio también necesita acceso a los CDN que utiliza.

## Estructura

```text
.
├── index.html   # Contenido y estructura del portafolio
├── styles.css   # Estilos, temas y adaptación responsive
├── script.js    # Tema, navegación y formulario
└── README.md    # Documentación del proyecto
```

