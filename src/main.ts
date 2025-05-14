import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { appSetup, swaggerSetup } from '@/app/app.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appSetup(app);
  swaggerSetup(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
