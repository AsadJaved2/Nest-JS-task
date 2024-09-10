import {
  Controller,
  Post,
  Body,
<<<<<<< HEAD
=======
  Param,
  Patch,
  Query,
  InternalServerErrorException,
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {} // Dependency Injection By creating a constructor(NEST handles(adds) this Dependency Injection itself in the background)

  @Post()
  createCategory(@Body() categoryDTO: CategoryDTO): Promise<Category> {
      return this.categoryService.createCategory(categoryDTO);
  }
}
