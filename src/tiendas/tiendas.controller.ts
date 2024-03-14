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
import { TiendasService } from './tiendas.service';
import { ITienda } from './tienda.interface';
import { TiendaDTO } from './tienda.dto';

@Controller('api/v1/tiendas')
export class TiendasController {
  constructor(private tiendasServicio: TiendasService) {}

  @Get()
  todos() {
    return this.tiendasServicio.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.tiendasServicio.uno(id);
  }
  @Post()
  insertar(@Body() tienda: TiendaDTO) {
    return this.tiendasServicio.insertar(tienda);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() tienda: TiendaDTO) {
    return this.tiendasServicio.actualizar(id, tienda);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.tiendasServicio.eliminar(id);
  }
}
