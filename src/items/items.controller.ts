import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItem } from './dto/create-item';
import { ItemService } from 'src/items/item.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemService) {}
  // @Get()
  // findAll(): Item[] {
  //   return this.itemService.findAll();
  // }
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItem: CreateItem): Promise<Item> {
    return this.itemService.create(createItem);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItem: CreateItem, @Param('id') id): string {
    return `Update ${id} with ${updateItem}`;
  }
}
