import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PartnerDto } from "./partner.dto";
import { PartnersService } from "./partners.service";

@Controller('partners')
export class PartnersController {
    constructor(private readonly partnersService: PartnersService) {}

    @Post()
    @UsePipes(ValidationPipe)
    add(
        @Body() partnerDto: PartnerDto,
    ) {
        const id = this.partnersService.add(partnerDto);
        return {id};
    }

    @Get()
    getAll() {
        return this.partnersService.getAll();
    }

    @Get(':id')
    getById(@Param('id') partnerId: string) {
        return this.partnersService.getById(partnerId);
    }

    @Patch(':id')
    updateById(
        @Param(':id') partnerId: string,
        @Body('firstname') firstname: string,
        @Body('lastname') lastname: string,
        @Body('username') username: string,
        @Body('password') password: string
    ) {
        this.partnersService.update(partnerId, firstname, lastname, username, password);
        return null;
    }

    @Delete(':id')
    deleteById(@Param('id') partnerId: string) {
        this.partnersService.delete(partnerId);
        return null;
    } 
}