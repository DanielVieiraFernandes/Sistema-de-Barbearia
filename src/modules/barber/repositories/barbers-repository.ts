import { Barber } from '@prisma/client';
import { CreateBarberDto } from '../dto/create-barber-dto';
import { PaginationParams } from './params/pagination-params';

export abstract class BarbersRepository {
  abstract create(dto: CreateBarberDto): Promise<Barber>;
  abstract findByUser(user: string): Promise<Barber | null>;
  abstract findAll(params: PaginationParams): Promise<Barber[]>;
}
