import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';

export const appSetup = (app: INestApplication) => {
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ZodValidationPipe());
};

export const swaggerSetup = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Sistema de Barbearia')
    .setDescription(
      'Sistema de barbearia para agendamento de cortes de cabelo, barba ...',
    )
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
};
