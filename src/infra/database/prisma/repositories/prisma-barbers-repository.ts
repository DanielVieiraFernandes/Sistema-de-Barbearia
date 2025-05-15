import { CreateBarberDto } from '@/modules/barber/dto/create-barber-dto';
import { BarbersRepository } from '@/modules/barber/repositories/barbers-repository';
import { Barber } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PaginationParams } from '@/modules/barber/repositories/params/pagination-params';

@Injectable()
export class PrismaBarbersRepository implements BarbersRepository {
  constructor(private readonly prisma: PrismaService) {}
 

  async create({
    age,
    name,
    password,
    user,
    especialidade,
  }: CreateBarberDto): Promise<Barber> {
    const barber = await this.prisma.barber.create({
      data: {
        barbeariaId: 1,
        age,
        name,
        password,
        user,
        specialities: {
          connect: especialidade.map((specialityName) => ({
            name: specialityName,
          })),
        },
      },
    });

    return barber;
  }

  async findByUser(user: string): Promise<Barber | null> {
    const barber = await this.prisma.barber.findUnique({
      where: {
        user,
      },
      include: {
        specialities: true,
      },
    });

    if (!barber) {
      return null;
    }

    return barber;
  }

  async findAll({page}: PaginationParams): Promise<Barber[]> {
    throw new Error('Method not implemented.');
  }
}
