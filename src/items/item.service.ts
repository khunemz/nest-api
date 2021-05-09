import { Injectable } from '@nestjs/common';
import { Item } from './../items/interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItem } from './dto/create-item';
@Injectable()
export class ItemService {
  items: Item[];
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: CreateItem): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
}
