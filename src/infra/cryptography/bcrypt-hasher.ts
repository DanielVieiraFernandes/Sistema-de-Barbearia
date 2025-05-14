import { compareSync, hash } from 'bcryptjs';
import { HashComparer } from './repositories/hash-comparer';
import { HashGenerator } from './repositories/hash-generator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptHasher implements HashComparer, HashGenerator {
  async hash(plain: string): Promise<string> {
    const SALT_HASH = 9;

    return await hash(plain, SALT_HASH);
  }
  async compare(plain: string, hash: string): Promise<boolean> {
    return compareSync(plain, hash);
  }
}
