import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'auth-service API',
      version: '1.0.0',
      description: 'API para el servicio de autenticación',
    },
  },
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
