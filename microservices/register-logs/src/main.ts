import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function Server() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('PORT');
  console.log(port);
 
  app.enableCors();


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // documentacion de la api con swagger
  const config = new DocumentBuilder()
    .setTitle('Registro de logs')
    .setDescription('Microservicio para registrar logs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(port);
}

Server();
