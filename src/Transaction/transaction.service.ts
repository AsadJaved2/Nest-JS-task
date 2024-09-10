import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(private  dataSource: DataSource) {}

  // Executes any operation passed as a function within a transaction
  async executeInTransaction<T>(operation: (manager: EntityManager) => Promise<T>): Promise<T> {
    return this.dataSource.transaction(operation);
  }
}
