import { Injectable } from '@nestjs/common';
import { Item } from './../items/interfaces/item.interface';

@Injectable()
export class ItemService {
  private items: Item[] = [
    {
      id: '12345',
      name: 'chutipong',
      description: 'this is the description',
      qty: 100,
    },
    {
      id: '23455',
      name: 'roobklom',
      description: 'this is the test description',
      qty: 200,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
