# Servicio de Autenticación
Este servicio está construido utilizando Node.js con TypeScript y emplea MongoDB como motor de base de datos. Se sigue una arquitectura basada en el patron MVC, lo que permite una estructura clara y mantenible.

# Comando para ejecutar el servidor 
  npm run dev

# variables de entorno 
## Puerto del servicio
PORT  
## URL de la base de datos mongoDB
DB_URL

## Funcionalidades Principales
Registro de Usuarios: Permite a los nuevos usuarios crear una cuenta en la aplicación.
Inicio de Sesión: Autentica a los usuarios existentes 
## Documentación de la API
Ruta: {urlBASE}/api-docs
Método: GET
Esta ruta proporciona documentación interactiva sobre los endpoints disponibles en el servicio de autenticación, facilitando su uso y comprensión para los desarrolladores. Utiliza herramientas como Swagger para generar una interfaz de documentación amigable.

## Ejemplo de Uso
### Registro de Usuario

Endpoint: URL_BASE/auth/register
Método: POST
Cuerpo de la Solicitud:
json
Copiar código
{
  "name": "prueba",
  "email": "prueba@gmail.com"
  "password": "1234555"
}
### Inicio de Sesión

Endpoint: /api/auth/login
Método: POST
Cuerpo de la Solicitud:
json
Copiar código
{
   "email": "prueba@gmail.com"
  "password": "1234555"
}
Este servicio asegura que la comunicación y el manejo de usuarios se realicen de manera segura y eficiente, siguiendo las mejores prácticas de desarrollo.