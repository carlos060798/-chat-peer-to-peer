import { Injectable } from '@nestjs/common';
import { CreateRegisterLogDto } from './dto/create-register-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterLog } from './entities/register-log.entity';

@Injectable()
export class RegisterLogsService {

  constructor(
    @InjectRepository(RegisterLog)
    private registerRepository: Repository<RegisterLog>,
  ) {}
 async  create(createRegisterLogDto: CreateRegisterLogDto) {
    console.log(createRegisterLogDto);
    try {
      const product = this. registerRepository.create(createRegisterLogDto);
      await this. registerRepository.save(product);
      return product;
    } catch (error) {
      return error;
    }
    
    
  }

 

  async findRegisters(userid: string) {
    console.log(userid);
    try {
      const registerLog = await this. registerRepository.find({
        where: { userid},
      });
      
      return registerLog;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  

  remove(id: number) {
    return `This action removes a #${id} registerLog`;
  }
}
