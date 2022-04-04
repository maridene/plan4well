import { Module } from '@nestjs/common';
import { Partner } from './partner.model';
import { TypeOrmModule } from '@nestjs/typeorm';


import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';

@Module({
    imports: [TypeOrmModule.forFeature([Partner])],
    controllers: [PartnersController],
    providers: [PartnersService],
})
export class PartnersModule {}