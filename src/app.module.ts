import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/items.module';
@Module({
  imports: [ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
