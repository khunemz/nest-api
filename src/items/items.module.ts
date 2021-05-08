import { Module } from '@nestjs/common';
import { ItemService } from 'src/items/item.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemModule {}
