/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product{
    @Prop()
    name: string;
    
    @Prop()
    price: number;

    @Prop()
    stock?: number;

    @Prop()
    ingredients?: string;

    @Prop()
    categories: string;

    @Prop()
    image_url?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)