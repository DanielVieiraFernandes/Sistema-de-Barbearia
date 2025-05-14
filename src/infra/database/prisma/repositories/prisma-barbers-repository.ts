import { CreateBarberDto } from '@/modules/barber/dto/create-barber-dto';
import { BarbersRepository } from '@/modules/barber/repositories/barbers-repository';
import { Barber } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBarbersRepository implements BarbersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ age, name, password, user }: CreateBarberDto): Promise<Barber> {
   return await this.prisma.barber.create({
      data: {
        barbeariaId: 1,
        age,
        name,
        password,
        user,
      },
    });
  }

  async findByUser(user: string): Promise<Barber | null> {
    const barber = await this.prisma.barber.findUnique({
      where: {
        user,
      },
    });

    if (!barber) {
      return null;
    }

    return barber;
  }
}
