import { IsEmail, IsNotEmpty , IsNumberString} from 'class-validator';


export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}

export class CreateMenuDto {
    @IsfoodName()
    foodName: string;

    @Isprice()
    price: number;

}

export class FindOneParams {
    @IsNumberString()
    id: number;
}