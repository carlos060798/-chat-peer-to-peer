import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterLogsModule } from './register-logs/register-logs.module';
import { ConfigModule } from '@nestjs/config'; //  configuracion de las variables de entorno
import { TypeOrmModule } from '@nestjs/typeorm'; //  configuracion de la base de datos

@Module({
  imports: [RegisterLogsModule,
    ConfigModule.forRoot(
      { isGlobal: true}
    ), //  configuracion de las variables de entorno
   TypeOrmModule.forRoot({ //  configuracion de la base de datos
    type: 'postgres',
    host:  process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly define the entities: [] array)
    synchronize: true,  //  synchronize the database with the entities every time the application starts
   
  
  }), 
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
