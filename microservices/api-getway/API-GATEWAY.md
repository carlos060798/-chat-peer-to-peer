
# Servicio de API Gateway
Este servicio está construido utilizando Node.js con TypeScript y sigue una arquitectura basada en el modelo de controlador, lo que permite una estructura clara y mantenible.

# Variables de Entorno
## Puerto del Servicio: PORT
## URL del Frontend: URL_FRONTEND
# Funcionalidades Principales
Enrutamiento de Solicitudes: Dirige las solicitudes del frontend hacia los microservicios correspondientes.
Manejo de Respuestas: Recibe y devuelve las respuestas de los microservicios al frontend, garantizando una comunicación fluida.
## Ejemplo de Uso
Solicitud POST
Endpoint: {urlBASE}
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
Este servicio asegura que la comunicación entre el frontend y el backend se realice de manera eficiente, procesando y contextualizando las solicitudes en ambas direcciones. Al actuar como intermediario, el API Gateway simplifica la interacción y mejora la escalabilidad del sistema.