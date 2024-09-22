
# Servicio de API Event Broker
Este servicio está construido utilizando Node.js con TypeScript y sigue una arquitectura basada en el patron  MVC, lo que proporciona una estructura clara y mantenible.
# Comando para ejecutar el servidor 
  npm run dev

# Variables de Entorno
Puerto del Servicio: PORT
# Funcionalidades Principales
Intermediación de Solicitudes: Actúa como intermediario entre el frontend y los microservicios, gestionando la ejecución según la necesidad de cada solicitud y devolviendo las respuestas apropiadas.
# Eventos que Recibe
 CONVERT_CURRENCY: Requerimiento del servicio de conversión de divisas.
 REGISTER_CREATED: Solicitud al servicio de autenticación para la creación de un usuario.
 LOGIN_USER: Solicitud al servicio de autenticación para el inicio de sesión de un usuario.
 REGISTER_CONVERT: Requerimiento para registrar conversiones en la base de datos.
 CONVERSATION_HISTORY: Solicitud para obtener los registros de conversiones por usuario.
# Ejemplo de Uso
## Solicitud para la Ejecución de un Microservicio
Endpoint: {urlBASE}/event
Método: POST
Cuerpo de la Solicitud:
json
Copiar código
{
  "event": "REGISTER_CONVERT",
  "data": {
    "userid": "user456",
    "fromCurrency": "COP",
    "toCurrency": "USD",
    "amount": "400000"
  }
}
Este servicio facilita la comunicación entre el API Gateway y los microservicios requeridos, ejecutando únicamente el servicio necesario según el evento solicitado. Esto permite un flujo eficiente de información y la posibilidad de procesar solicitudes de manera efectiva.