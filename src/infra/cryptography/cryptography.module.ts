import { Module } from '@nestjs/common';
import { EnvModule } from '../env/env.module';
import { HashGenerator } from './repositories/hash-generator';
import { BcryptHasher } from './bcrypt-hasher';
import { HashComparer } from './repositories/hash-comparer';
import { Encrypt } from './repositories/encrypt';
import { JwtEncrypt } from './jwt-encrypt';

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: HashGenerator,
      useClass: BcryptHasher,
    },
    {
      provide: HashComparer,
      useClass: BcryptHasher,
    },
    {
      provide: Encrypt,
      useClass: JwtEncrypt,
    },
  ],
  exports: [HashGenerator, HashComparer, Encrypt],
})
export class CryptographyModule {}
