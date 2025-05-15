import { createZodDto } from 'nestjs-zod';
import { string, z, ZodEnum, ZodEnumDef } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

const createBarber = z.object({
  name: z.string().min(3).max(100),
  age: z.coerce.number().int().min(16).max(110),
  user: z
    .string()
    .min(3)
    .max(30)
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'O nickname só pode conter letras, números, hífens e underscores.',
    )
    .refine((value) => !/[@/\\&]/.test(value), {
      message:
        'O nickname não pode conter caracteres especiais como @, /, \\ ou &.',
    }),
  password: z.string().length(6, `A senha deve conter 6 caracteres`),
  especialidade: z
    .array(
      z.enum(['Corte', 'Sobrancelha', 'Barba', 'Pigmentação', 'Hidratação']),
    )
    .min(1, 'Deve selecionar pelo menos uma especialidade.'),
});

export class CreateBarberDto extends createZodDto(createBarber) {
  @ApiProperty({
    description: 'Nome do barbeiro',
    type: String,
    minLength: 3,
    maxLength: 100,
  })
  name: string;

  @ApiProperty({
    description: 'Idade do barbeiro',
    type: Number,
    minimum: 16,
    maximum: 110,
  })
  age: number;

  @ApiProperty({
    description: 'Nome de usuário',
    type: String,
  })
  user: string;

  @ApiProperty({
    description: 'Senha do usuário (6 caracteres)',
    type: String,
    minLength: 6,
  })
  password: string;

  @ApiProperty({
    description: 'Especialidades do barbeiro',
    enum: ['Corte', 'Sobrancelha', 'Barba', 'Pigmentação', 'Hidratação'],
    example: ['Corte', 'Barba'],
  })
  especialidade: (
    | 'Corte'
    | 'Sobrancelha'
    | 'Barba'
    | 'Pigmentação'
    | 'Hidratação'
  )[];
}
