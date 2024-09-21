
import {
    IsString,
    IsNotEmpty,
    IsNumber
} from "class-validator";

export class  CreateRegisterLogDto {

    @IsString()
    @IsNotEmpty()
    userid: string;
    @IsString()
    @IsNotEmpty()
    fromCurrency: string;
    @IsString()
    @IsNotEmpty()
    toCurrency: string;
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    result: number;

}