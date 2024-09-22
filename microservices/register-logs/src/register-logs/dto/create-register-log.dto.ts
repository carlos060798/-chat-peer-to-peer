import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNotEmpty,
    IsNumber
} from "class-validator";

export class CreateRegisterLogDto {
    @ApiProperty(
        {
            description: 'id del usuario que realiza la conversión',
            example: '6754ddb8-311e-4bb8-9153-f280da8752b1'
        }
    )

    @IsString()
    @IsNotEmpty()
    userid: string;
    @ApiProperty(
        {
            description: 'Moneda de origen',
            example: 'USD'
        }
    )
    @IsString()
    @IsNotEmpty()
    fromCurrency: string;
    @ApiProperty(
        {
            description: 'Moneda de destino',
            example: 'COL'
        }
    )
    @IsString()
    @IsNotEmpty()
    toCurrency: string;

    @ApiProperty(
        {
            description: 'Cantidad a convertir',
            example: 1
        })
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @ApiProperty(
        {
            description: 'Resultado de la conversión',
            example: 4000
        })
    @IsNumber()
    @IsNotEmpty()
    result: number;

}