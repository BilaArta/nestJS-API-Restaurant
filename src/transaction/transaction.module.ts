import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { MongooseModule } from '@nestjs/mongoose';

import {Transaction, TransactionSchema} from "./schemas/transaction.schemas"

@Module({
  imports: [MongooseModule.forFeature([{name: Transaction.name, schema:TransactionSchema}])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
