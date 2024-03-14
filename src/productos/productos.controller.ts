import {
  Body,
  Controller,
  Delete,
  Get,
  Param, 
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { IProducto } from './producto.interface';
import { ProductoDTO } from './producto.dto';

@Controller('api/v1/productos')
export class ProductosController {
  constructor(private ProductosServicio: ProductosService) {}

  @Get()
  todos() {
    return this.ProductosServicio.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.ProductosServicio.uno(id);
  }
  @Post()
  insertar(@Body() producto: ProductoDTO) {
    return this.ProductosServicio.insertar(producto);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() producto: ProductoDTO) {
    return this.ProductosServicio.actualizar(id, producto);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.ProductosServicio.eliminar(id);
  }
}
