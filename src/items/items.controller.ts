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
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createItem: CreateItem): string {
    return `CREATE ITEMS ${createItem.name} 
      ${createItem.description}
      ${createItem.qty}`;
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
