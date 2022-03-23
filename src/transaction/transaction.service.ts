import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import {Transaction, TransactionDocument} from "./schemas/transaction.schemas"


@Injectable()
export class TransactionService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}


  async create(createTransactionDto: CreateTransactionDto) {
    const createTransaction = new this.transactionModel(createTransactionDto)
    return createTransaction.save();

    // return 'This action adds a new transaction';
  }

  async findAll() {
    return this.transactionModel.find().exec();
    // return `This action returns all transaction`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
