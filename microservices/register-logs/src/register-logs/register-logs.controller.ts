import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterLogsService } from './register-logs.service';
import { CreateRegisterLogDto } from './dto/create-register-log.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('conversion-history')
@ApiResponse({ status: 201, description: 'registro creado', 
 
})
@ApiResponse({ status: 400, description: 'Bad Request' 
})
@ApiResponse({ status: 401, description: 'No autorizado' 
})

@ApiResponse({ status: 404, description: 'No encontrado' 
}) 
@ApiResponse({ status: 500, description: 'Error del servidor'
})
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
