# Prototipo de Ecosistema - Backend

Este repositorio contiene el backend del proyecto "Desarrollo de un prototipo de ecosistema para la integración efectiva de tecnologías populares en el desarrollo de  sistemas web: Angular, Node.js, JWT, Bcrypt y MySQL", el cual forma parte de un sistema integral diseñado para la gestión y visualización de información relacionada con bares y establecimientos similares.

## Descripción

El backend se ha desarrollado utilizando Node.js y sigue el patrón de diseño Modelo Vista Controlador (MVC) para una organización clara y mantenible del código. Proporciona una interfaz de programación de aplicaciones (API) para la gestión de datos relacionados con los establecimientos, menús, promociones, eventos y usuarios.

## Tecnologías Utilizadas

- Node.js: Entorno de ejecución de JavaScript para el backend.
- Express.js: Marco de aplicación web para Node.js que proporciona funciones y herramientas para crear APIs RESTful.
- MySQL: Sistema de gestión de bases de datos relacional utilizado para almacenar y administrar la información del sistema.
- bcrypt: Biblioteca de cifrado utilizada para almacenar de forma segura las contraseñas de los usuarios.
- JSON Web Tokens (JWT): Mecanismo utilizado para la autenticación y autorización de usuarios.
- Multer: Middleware de manejo de archivos para la carga de imágenes de establecimientos.
- Cors: Middleware utilizado para permitir solicitudes de recursos desde un dominio diferente al del servidor.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `controllers/`: Contiene los controladores que manejan las solicitudes HTTP y gestionan la lógica de negocio.
- `models/`: Contiene los modelos de datos que representan las entidades en la base de datos.
- `routes/`: Contiene las definiciones de las rutas de la API y la lógica para manejar las solicitudes HTTP.
- `config/`: Contiene archivos de configuración para la base de datos y otros ajustes del servidor.
- `uploads/`: Directorio donde se almacenan las imágenes cargadas por los usuarios.
- `utils/`: Contiene utilidades y funciones auxiliares utilizadas en el proyecto.
- `app.js`: Punto de entrada principal de la aplicación donde se configuran y montan los middleware y las rutas.
- `server.js`: Archivo de inicio del servidor que inicializa la aplicación y escucha las solicitudes entrantes.

## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `npm install`.
3. Inicia el servidor ejecutando `node server.js`, `npm start` o `nodemon start`.
4. El servidor estará disponible en `http://localhost:3000` por defecto.


## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor, sigue estas pautas:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva función (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz commits con mensajes descriptivos.
4. Sube tus cambios a tu repositorio fork (`git push origin feature/nueva-funcion`).
5. Abre un pull request y describe tus cambios detalladamente.

¡Gracias por contribuir!