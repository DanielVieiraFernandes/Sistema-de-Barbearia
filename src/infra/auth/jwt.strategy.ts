import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { EnvService } from '../env/env.service';
import { z } from 'zod';

const jwtPayload = z.object({
  sub: z.string().uuid(),
  role: z.enum(['BARBER', 'COSTUMER']),
});

export type UserPayload = z.infer<typeof jwtPayload>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(env: EnvService) {
    const publicKey = Buffer.from(env.get('JWT_PUBLIC_KEY'), 'base64');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms: ['RS256'],
      secretOrKey: publicKey,
    });
  }

  async validate(payload: UserPayload) {
    return jwtPayload.parse(payload);
  }
}
