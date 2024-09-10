import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
<<<<<<< HEAD

  imports: [
    TypeOrmModule.forFeature([Category]),
  ],
=======
  imports: [TypeOrmModule.forFeature([Category]), AuthModule],
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761

  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController],
})
export class CategoryModule {}
