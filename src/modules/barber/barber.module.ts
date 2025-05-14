import { DatabaseModule } from '@/infra/database/database.module';
import { Module } from '@nestjs/common';
import { BarberService } from './barber.service';
import { CryptographyModule } from '@/infra/cryptography/cryptography.module';
import { BarberController } from './barber.controller';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers:[BarberController],
  providers: [BarberService],
})
export class BarberModule {}
