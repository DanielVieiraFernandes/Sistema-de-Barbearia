import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const createBarber = z.object({
  name: z.string().min(3).max(100),
  age: z.coerce.number().int().min(16).max(110),
  user: z.string(),
  password: z.string().length(6),
});

export class CreateBarberDto extends createZodDto(createBarber) {}