# **Integración de API y gestión de estado en React**

Desarrollé una aplicación React conectada a una API REST para la gestión dinámica de usuarios y tarjetas de contenido. Implementé la obtención y sincronización de datos mediante solicitudes asíncronas, gestionando el estado global de la aplicación con React Hooks (`useState`, `useEffect`) y Context API.

##Entre las funcionalidades desarrolladas se incluyen:

- Integración de una capa de servicios para consumir endpoints de usuario y tarjetas.
- Carga dinámica de información del perfil y listado de tarjetas desde la API.
- Implementación de Context API para compartir datos del usuario entre componentes sin prop drilling.
- Sistema de interacción con tarjetas mediante "likes" y eliminación de elementos, actualizando la interfaz de forma reactiva.
- Formularios controlados para la edición de perfil y actualización de datos en el servidor.
- Gestión de avatar utilizando referencias (`useRef`) para el acceso directo a elementos del DOM.
- Creación de nuevas tarjetas y actualización inmediata de la interfaz mediante manipulación del estado local.
- Arquitectura basada en componentes reutilizables y flujo de datos declarativo siguiendo buenas prácticas de React.

## Metodología BEM.

Para una mejor organización de código y archivos, se utilizo la metodología de BEM.

/_ Sintaxis BEM_/
/_ Bloque _/
.card { }

/_ Elemento _/
.card**title { }
.card**image { }

/_ Modificador _/
.card--featured { }
.card\_\_title--large { }

### Para la organización de archivos es:

- El bloque.
- Todos los modificadores de bloque.
- Cada elemento.
- Después de cada elemento, todos sus modificadores (antes del próximo elemento).

## **Tecnologías:**

- React
- JavaScript ES6+
- Context API
- Hooks (useState, useEffect, useContext, useRef)
- REST API
- CSS.
- Git

![ejemplo](https://github.com/Amairani23/web_project_around_react/blob/659a656184d55432d365fb53c2d586d695031ce5/images/pantalla.jpg "ejemplo")
