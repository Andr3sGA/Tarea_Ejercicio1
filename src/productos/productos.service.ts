import { Injectable } from '@nestjs/common';
import { IProducto } from './producto.interface';
import { v4 as uuidV4 } from 'uuid';
import { ProductoDTO } from './producto.dto';

@Injectable()
export class ProductosService {
  private productos: IProducto[] = [];

  todos() {
    return this.productos;
  }

  uno(id: string) {
    return this.productos.find((producto) => producto.id === id);
  }

  insertar(producto: ProductoDTO) { 
    const emp: IProducto = {
      id: uuidV4(),
      ...producto,
    };
    this.productos.push(emp);
    return this.productos;
  }

  actualizar(id: string, productoActualizar: ProductoDTO) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      this.productos[index] = { id, ...productoActualizar };
      return this.productos[index];
    } else {
      throw new Error('Producto no encontrado');
    }
  }

  eliminar(id: string) {
    const index = this.productos.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
      return 'Producto Eliminado';
    } else {
      throw new Error('Producto no encontrado');
    }
  }
}

