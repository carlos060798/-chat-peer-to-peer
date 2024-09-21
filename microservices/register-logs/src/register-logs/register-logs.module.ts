import { Module } from '@nestjs/common';
import { RegisterLogsService } from './register-logs.service';
import { RegisterLogsController } from './register-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterLog } from './entities/register-log.entity';


@Module({
  controllers: [RegisterLogsController],
  providers: [RegisterLogsService],
  imports: [
    TypeOrmModule.forFeature([ RegisterLog]),
  ],
})
export class RegisterLogsModule {}
