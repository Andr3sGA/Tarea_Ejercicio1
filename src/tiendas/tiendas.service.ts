import { Injectable } from '@nestjs/common';
import { ITienda } from './tienda.interface';
import { v4 as uuidV4 } from 'uuid';
import { TiendaDTO } from './tienda.dto';

@Injectable()
export class TiendasService {
  private tiendas: ITienda[] = [];

  todos() {
    return this.tiendas;
  }

  uno(id: string) {
    return this.tiendas.find((tienda) => tienda.id === id);
  }

  insertar(tienda: TiendaDTO) {
    const emp: ITienda = {
      id: uuidV4(),
      ...tienda,
    };
    this.tiendas.push(emp);
    return this.tiendas;
  }

  actualizar(id: string, tiendaActualizar: TiendaDTO) {
    const index = this.tiendas.findIndex((tienda) => tienda.id === id);
    if (index !== -1) {
      this.tiendas[index] = { id, ...tiendaActualizar };
      return this.tiendas[index];
    } else {
      throw new Error('Tienda no encontrada');
    }
  }

  eliminar(id: string) {
    const index = this.tiendas.findIndex((tienda) => tienda.id === id);
    if (index !== -1) {
      this.tiendas.splice(index, 1);
      return 'Tienda Eliminada';
    } else {
      throw new Error('Tienda no encontrada');
    }
  }
}

