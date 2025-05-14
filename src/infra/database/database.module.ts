import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BarbersRepository } from '@/modules/barber/repositories/barbers-repository';
import { PrismaBarbersRepository } from './prisma/repositories/prisma-barbers-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BarbersRepository,
      useClass: PrismaBarbersRepository,
    },
  ],
  exports: [PrismaService, BarbersRepository],
})
export class DatabaseModule {}
