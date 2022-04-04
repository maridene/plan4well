import { IsDate, IsString} from 'class-validator';


export class HistorizedEntityDto {
    
    @IsDate()
    creationDate: Date;
    
    @IsDate()
    lastModificationDate: Date;
}