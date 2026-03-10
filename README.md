# Actividades de nivelación

Este repositorio contiene dos implementaciones sencillas de una misma actividad de programación. Cada carpeta tiene su propia forma de ejecución, pero ambas muestran una página con:

- Un input de texto donde se puede escribir y, al presionar Enter o el botón, se muestra el contenido en una alerta (o un mensaje indicando que está vacío).
- Un botón que cambia el esquema de colores del `body` ciclando entre blanco, negro y azul claro.

---

## Implementación 1 (implementacion1)

Esta versión es puramente estática y no requiere servidor.

### Ejecución

1. Abre `implementacion1/index.html` en tu navegador (arrastrándolo al navegador o usando `file://`).
2. Interactúa con los elementos de la página: escribe texto, presiona el botón o Enter, y usa el botón "change color".

### Cómo funciona
- `index.html` contiene los elementos y carga `main.js` como módulo.
- `main.js` agrega manejadores de eventos al input y a los botones. Los eventos de `keypress` y `click` muestran alertas y modifican el color de fondo/texto.

---

## Implementación 2 (implementacion2)

Esta versión es similar a la anterior, pero se ejecuta desde un pequeño servidor Node.js usando Express.

### Ejecución

1. Asegúrate de tener instalado Node.js (versión 14 o superior).
2. Dentro de la carpeta `implementacion2`, instala dependencias:
   ```bash
   cd implementacion2
   npm install
   ```
3. Inicia el servidor:
   ```bash
   node app.js
   ```
4. Abre en tu navegador la dirección `http://localhost:3000`.
5. Usa la página de la misma manera que en la implementación 1.

> **Nota:** la carpeta ya incluye `package.json` con Express como dependencia.

### Cómo funciona
- `app.js` configura un servidor Express que responde al root (`/`) devolviendo el archivo `index.html`.
- El HTML interno contiene el mismo script que en la primera implementación, pero integrado dentro de la misma página (no como módulo externo).

---

En ambos casos la idea es practicar manejo básico del DOM y eventos en JavaScript, y en la segunda también ver un servidor simple en Node.js.
