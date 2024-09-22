# Microservices Architecture README
la construcción del backend de esta aplicación trata de segir  una arquitectura de microservicios. A continuación, se detallan las herramientas de desarrollo y los servicios implementados.

## Herramientas de Desarrollo

- **Lenguajes**: JavaScript y Typescript
- **Frameworks**: 
  - Express
  - NestJS
- **Bases de Datos**: 
  - MongoDB
  - PostgreSQL

## Servicios de Microservicios

### API Gateway
El API Gateway actúa como el punto de entrada principal para las solicitudes del frontend. Se encarga de dirigir las peticiones a los servicios correspondientes y manejar la autenticación y el enrutamiento.

### Event Broker
Este servicio de intermediación gestiona la comunicación entre los diferentes microservicios, facilitando la ejecución de solicitudes y garantizando que cada servicio se ejecute de manera eficiente.

### Auth Service
El servicio de autenticación maneja el registro de usuarios y el inicio de sesión dentro de la aplicación. Asegura que solo los usuarios autorizados tengan acceso a los recursos y servicios.

### Currency Conversion Service
Este servicio consume una API externa para la conversión de monedas. Utiliza la siguiente API: [ExchangeRate API](https://www.exchangerate-api.com/), permitiendo a los usuarios realizar conversiones de divisas en tiempo real.

### Register Logs Service
El servicio de registro almacena en la base de datos todas las conversiones realizadas. Esto permite llevar un control y auditoría de las operaciones de conversión de monedas en la aplicación.

