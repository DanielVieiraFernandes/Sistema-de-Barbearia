import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber-dto';
import { BarbersRepository } from './repositories/barbers-repository';
import { Either, error, success } from '@/app/core/errors/either';
import { HashGenerator } from '@/infra/cryptography/repositories/hash-generator';
import { BarberAlreadyExists } from './errors/barber-already-exists-error';
import { Encrypt } from '@/infra/cryptography/repositories/encrypt';

@Injectable()
export class BarberService {
  constructor(
    private readonly barbersRepository: BarbersRepository,
    private readonly hashGenerator: HashGenerator,
    private readonly encrypt: Encrypt,
  ) {}

  async createBarber({
    age,
    name,
    password,
    user,
    especialidade,
  }: CreateBarberDto): Promise<
    Either<
      BarberAlreadyExists,
      {
        accessToken: string;
      }
    >
  > {
    const barber = await this.barbersRepository.findByUser(user);

    if (barber) return error(new BarberAlreadyExists());

    const passwordHashed = await this.hashGenerator.hash(password);

    const barberCreated = await this.barbersRepository.create({
      age,
      name,
      password: passwordHashed,
      user,
      especialidade,
    });

    const accessToken = await this.encrypt.encrypt(
      barberCreated.id,
      barberCreated.role,
    );

    return success({
      accessToken,
    });
  }

  async findAllBarbers(){

  }
}
