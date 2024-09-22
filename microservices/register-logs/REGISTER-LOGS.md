# Descripción
Este microservicio se encarga de registrar las conversiones de divisas que devuelve la API desde el chat, almacenando la información en una base de datos. Cada conversión se relaciona con un usuario específico, lo que permite recuperar un historial de consultas.

# Configuración del Proyecto
bash
Copiar código
$ npm install
Compilación y Ejecución del Proyecto
bash
Copiar código
# Modo desarrollo
$ npm run start

# Modo vigilancia (watch mode)
$ npm run start:dev

# Modo producción
$ npm run start:prod
# Documentación con Swagger
Puedes acceder a la documentación en el siguiente enlace: http://localhost:3003/docs

## Variables de Entorno
DB_NAME => Nombre de la base de datos
DB_HOST => Host de la base de datos
DB_PORT => Puerto de la base de datos
DB_USER => Usuario de la base de datos
DB_PASSWORD => Contraseña de la base de datos
PORT => Puerto del servicio
## Funcionalidades Principales
Registrar las consultas realizadas a la API en una base de datos.
Servir el historial de consultas por cada usuario que las realice en la aplicación.
## Ejemplo de Uso
### Obtención de Registros por Usuario
Endpoint: {urlBASE}/conversion-history/all/{id del usuario a buscar}
Método: GET
Respuesta Ejemplo
json
Copiar código
[
    {
        "id": "6754ddb8-311e-4bb8-9153-f280da8752b1",
        "userid": "66ed7ba3e3c222a32eba22ae",
        "fromCurrency": "COP",
        "toCurrency": "USD",
        "amount": 43400,
        "result": null,
        "created": "2024-09-21T21:19:14.526Z"
    },
    {
        "id": "86f27d45-0789-46bf-b480-2c56671417c5",
        "userid": "66ed7ba3e3c222a32eba22ae",
        "fromCurrency": "COP",
        "toCurrency": "USD",
        "amount": 60000,
        "result": null,
        "created": "2024-09-21T21:21:05.547Z"
    },
    {
        "id": "3c15bf0e-4ce5-403b-98e6-0aca2e9b7e33",
        "userid": "66ed7ba3e3c222a32eba22ae",
        "fromCurrency": "COP",
        "toCurrency": "USD",
        "amount": 40000,
        "result": 9.5448,
        "created": "2024-09-21T21:22:25.790Z"
    }
]
## Creación de Consultas
Endpoint: {urlBASE}/conversion-history/create
Método: POST
Cuerpo de la Solicitud
json
Copiar código
{
    "userid": "user456",
    "fromCurrency": "COP",
    "toCurrency": "USD",
    "amount": "400000"
}

Este servicio se encarga de registrar las consultas realizadas en el chat y permite mostrar las consultas del usuario solicitando únicamente su ID.