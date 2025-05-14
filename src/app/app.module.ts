import { AuthModule } from '@/infra/auth/auth.module';
import { envSchema } from '@/infra/env/env';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env),
    }),
    AuthModule,
  ],
})
export class AppModule {}
