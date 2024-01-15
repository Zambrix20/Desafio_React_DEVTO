# Desafio Modulo React

El desafio consistio en hacer un clone de la pagina web Dev.to con la libreria React ![enter image description here](https://img.icons8.com/office/16/react.png)

## Instalación

1. Clonar el repositorio `git clone https://github.com/Zambrix20/Desafio_React_DEVTO.git`
2. Navegar al contenido de las capertas con `cd Desafio_React_DEVTO`
3. Instalar las dependencias: se explicara en el la seccion de **Instalacion local**

## Instalación Local

### Backend

Para instalar y ejecutar el backend:

1. Navegar al directorio del backend: `cd Desafio_React_DEVTO/Server`
2. Instalar las dependencias: `npm install`
3. Configurar las variables de entorno, si es necesario.

   - Por temas de seguridad no se incluyo el archivo de configuracion
     > **Nota:** Entrar en la carpeta de **Server/src** creamos el archivo config.js para establecer la **PALABRA_SECRETA** y la **URI** de la base de datos

4. Ejecutar el servidor: `npm run dev`

El servidor Node.js ahora debería estar ejecutándose en `http://localhost:4000/api` (o el puerto que hayas configurado).

### Frontend

Para instalar y ejecutar el frontend:

1. Navegar al directorio del frontend: `cd Desafio_React_DEVTO/client`
2. Instalar las dependencias: `npm install`
3. Ejecutar la aplicación React: `npm run dev`

La aplicación React ahora debería estar ejecutándose en `http://localhost:5173` (o el puerto que hayas configurado).

## Herramientas Implementadas

### Backend

El backend de este proyecto se ha desarrollado utilizando las siguientes herramientas:

- **Node.js**: Un entorno de ejecución para JavaScript construido en el motor de JavaScript V8 de Chrome.
- **Express.js**: Un marco de aplicación web para Node.js diseñado para construir aplicaciones web y API.
- **MongoDB**: Una base de datos NoSQL, utilizada para almacenar los datos de la aplicación.
- **Mongoose**: Una biblioteca de JavaScript que proporciona una solución de modelado de objetos para MongoDB.
- **bcryptjs**: Una biblioteca para el cifrado seguro de contraseñas.
- **cookie-parser**: Middleware para analizar cookies en las solicitudes HTTP.
- **cors**: Un paquete Node.js para proporcionar un middleware Connect/Express que se puede usar para habilitar el intercambio de recursos de origen cruzado (CORS) en una aplicación.
- **jsonwebtoken**: Una implementación de JSON Web Tokens (JWT) para Node.js.
- **morgan**: Un middleware para registrar solicitudes HTTP para Node.js. Facilita la supervisión y el registro de eventos importantes relacionados con las solicitudes entrantes.
- **zod**: Una biblioteca de validación de esquemas en TypeScript. Proporciona una forma elegante y segura de validar y estructurar datos en aplicaciones TypeScript, asegurando la integridad de los datos en tiempo de compilación.

### Frontend

El frontend de este proyecto se ha desarrollado utilizando las siguientes herramientas:

- **React.js**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **TaildwindCSS**: Un marco de diseño CSS utilizable con JavaScript para construir interfaces de usuario modernas y con un enfoque de estilo utilitario.
- **Axios**: Una biblioteca de JavaScript utilizada para hacer solicitudes HTTP desde el navegador.
- **React Router DOM**: Una biblioteca de enrutamiento para React que permite la navegación entre componentes React de manera declarativa en una aplicación.
- **React Hook Form**: Una biblioteca para gestionar formularios en React. Proporciona un enfoque simple y flexible para manejar la validación y el estado de los formularios.
- **js-cookie**: Una biblioteca para trabajar con cookies en JavaScript. Facilita la lectura, escritura y eliminación de cookies en el navegador de manera sencilla.

## API Utilizada

La API utilizada en este proyecto es una API RESTful construida con Node.js y Express.js. La API se encuentra en el mismo repositorio que el proyecto, específicamente en la carpeta `Server`.

Dentro de la carpeta `Server`, encontrarás todos los archivos y carpetas relacionados con la API, incluyendo los modelos, controladores, rutas, etc.
