// src/transaction/transaction.module.ts

import { Module, Global } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Global() // This makes the module globally available
@Module({
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
