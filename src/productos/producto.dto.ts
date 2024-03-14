import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class ProductoDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  nombre_produto: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  precio: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  stock: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  proveedor: string;
 
}
