import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import {Document, Model} from 'mongoose';
import {User} from "../../user/schemas/user.schemas"

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction{
    @Prop()
    noTransaction: number;

    @Prop()
    idUser: number;

    @Prop()
    orderProductsId: [string];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop()
    createdAt?: Date;

    @Prop()
    prices: number;

    @Prop()
    status?: boolean;
}


export const TransactionSchema = SchemaFactory.createForClass(Transaction);

// TransactionSchema.pre('save', ():void => {
//     console.log(this.noTransaction);
    
// })

// TransactionSchema.static('getPrice', (idProducts) => {
//     idProducts.forEach(id => {
//         this.findOne({'_id':id})
//     });
// })


