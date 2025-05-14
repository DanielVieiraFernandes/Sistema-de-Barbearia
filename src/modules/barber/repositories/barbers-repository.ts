import { Barber } from '@prisma/client';
import { CreateBarberDto } from '../dto/create-barber-dto';

export abstract class BarbersRepository {
  abstract create(dto: CreateBarberDto): Promise<Barber>;
  abstract findByUser(user: string): Promise<Barber | null>;
}
