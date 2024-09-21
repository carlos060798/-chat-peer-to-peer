import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterLogsService } from './register-logs.service';
import { CreateRegisterLogDto } from './dto/create-register-log.dto';

@Controller('conversion-history')
export class RegisterLogsController {
  constructor(private readonly registerLogsService: RegisterLogsService) {}

  @Post('created')
  create(@Body() createRegisterLogDto: CreateRegisterLogDto) {
    return this.registerLogsService.create(createRegisterLogDto);
  }

 

  @Get('all/:id')
  findOne(@Param('id') id: string) {
    return this.registerLogsService.findRegisters(id);
  }

 
 
}
