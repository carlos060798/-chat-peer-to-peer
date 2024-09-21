# Servicio de consumo de api externa
Este servicio está construido utilizando Node.js con TypeScript y  Se sigue una arquitectura basada en el modelo de controlador, lo que permite una estructura clara y mantenible.


# variables de entorno 
## Puerto del servicio
PORT  
## URL de la api de exchangerate para obtener los tipos de cambio

EXCHANGERATE_API_URL  = "https://v6.exchangerate-api.com/v6/{API_KEY}/pair"


## Funcionalidades Principales
solicitud de conversion de monedas ala api externa de  exchangerate


## Ejemplo de Uso
### Registro de Usuario

Endpoint: {urlBASE}/currency/convert
Método: POST
Cuerpo de la Solicitud:
json
Copiar código
{
  "to": "USD",
  "from": "COP",
  "amount": 60000
  }

Este servicio asegura que la comunicación y el manejo de Las inetraciones con la api de cambio de divisas externas desde el  backend