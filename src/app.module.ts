import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendasModule } from './tiendas/tiendas.module';

@Module({
  imports: [TiendasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
