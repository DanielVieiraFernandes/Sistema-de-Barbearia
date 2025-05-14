import { Barber } from '@prisma/client';
import { CreateBarberDto } from '../dto/create-barber-dto';

export abstract class BarbersRepository {
  abstract create(dto: CreateBarberDto): Promise<void>;
  abstract findByUser(user: string): Promise<Barber | null>;
}
