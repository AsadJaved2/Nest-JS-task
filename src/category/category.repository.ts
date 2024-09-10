import { DataSource, Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryDTO } from './dto/create-category.dto';
import { TransactionService } from '../transaction/transaction.service';  // Import TransactionService

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(private dataSource: DataSource, 
    private transactionService: TransactionService
  ) {
    super(Category, dataSource.createEntityManager());
  }

  async createCategory(categoryDTO: CategoryDTO): Promise<Category> {
    return await this.transactionService.executeInTransaction(async (manager) => {
      const { name } = categoryDTO;

      const category = manager.create(Category, { name });
      try {
        await manager.save(category);
        return category;
      } catch (error) {
<<<<<<< HEAD
        throw new InternalServerErrorException('Failed to create category');
=======
        throw new InternalServerErrorException('Failed to create category (Repository)');
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
      }
    });
  }
}
