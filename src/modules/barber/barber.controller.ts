import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber-dto';
import { BarberService } from './barber.service';
import { Public } from '@/infra/auth/public';

@Controller('barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  @Public()
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
}
