
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from "./user/user.module";


@Module({
  imports: 
  [
    UserModule, 
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.oxea7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
})
export class AppModule {}