import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class TiendaDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  nombres: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  ciudad: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  telefono: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  categoria: string;
 
}
