import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber-dto';
import { BarberService } from './barber.service';
import { Public } from '@/infra/auth/public';
import { ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  @Public()
  @ApiBody({
    description: 'Dados para criar um novo barbeiro',
    type: CreateBarberDto, 
  })
  @ApiResponse({
    status: 201,
    description: 'Barbeiro criado com sucesso',
    schema: {
      type: 'object',
      properties: {
        access_token: { type: 'string' },
      },
    },
  })
  async createBarber(@Body() dto: CreateBarberDto) {
    const result = await this.barberService.createBarber(dto);

    if (result.isError()) {
      const error = result.value;
      throw new BadRequestException(error.message);
    }

    const { accessToken: access_token } = result.value;

    return {
      access_token,
    };
  }

  @Get()
  async findAll(){
    
  }
}
