import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber-dto';
import { BarbersRepository } from './repositories/barbers-repository';
import { Either, error, success } from '@/app/core/errors/either';
import { HashGenerator } from '@/infra/cryptography/repositories/hash-generator';

@Injectable()
export class BarberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly barbersRepository: BarbersRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}

  async createBarber({
    age,
    name,
    password,
    user,
  }: CreateBarberDto): Promise<Either<Error, {}>> {
    const barber = await this.barbersRepository.findByUser(user);

    if (barber) {
      return error(new Error('O Barbeiro já existe no sistema'));
    }

    const passwordHashed = await this.hashGenerator.hash(password);

    await this.barbersRepository.create({
      age,
      name,
      password: passwordHashed,
      user,
    });

    return success({});
  }
}
