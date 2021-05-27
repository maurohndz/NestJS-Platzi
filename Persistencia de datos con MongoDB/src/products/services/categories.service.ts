import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {
  constructor() {} // @InjectModel(Category.name) private categoryModel: Model<Category>,

  findAll() {
    // return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    // const cateroy = await this.categoryModel.findById(id).exec();
    // if (!cateroy) {
    //   throw new NotFoundException(`Category #${id} not found`);
    // }
    // return cateroy;
  }

  create(data: CreateCategoryDto) {
    // const newCategory = new this.categoryModel(data);
    // return newCategory.save();
  }

  update(id: string, changes: UpdateCategoryDto) {
    // const category = this.categoryModel
    //   .findByIdAndUpdate(id, { $set: changes }, { new: true })
    //   .exec();
    // if (!category) {
    //   throw new NotFoundException(`Category #${id} not found`);
    // }
    // return category;
  }

  remove(id: string) {
    // return this.categoryModel.findByIdAndRemove(id);
  }
}
