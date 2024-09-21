import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 
import { ConfigService } from '@nestjs/config';


async function Server() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('PORT');
  console.log(port);
  await app.listen(port);
  app.enableCors();

 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
}
Server();
