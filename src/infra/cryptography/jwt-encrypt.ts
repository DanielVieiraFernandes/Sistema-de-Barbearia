import { JwtService } from '@nestjs/jwt';
import { Encrypt } from './repositories/encrypt';

export class JwtEncrypt implements Encrypt {
  constructor(private readonly jwtService: JwtService) {}

  async encrypt(sub: string, role: string): Promise<string> {
    return this.jwtService.sign({ sub, role });
  }
}
