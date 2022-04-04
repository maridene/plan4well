import { IsString, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';

export class SubscriptionDto {

    @IsString()
    @IsNotEmpty()
    partnerId: string;

    @IsDateString()
    @IsNotEmpty()
    endDate: Date;

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

}
