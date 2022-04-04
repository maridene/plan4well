import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SubscriptionDto } from "./subscriptions.dto";
import { SubscriptionsService } from "./subscriptions.service";

@Controller('subscriptions')
export class SubscriptionsController {
    constructor(private readonly subscriptionsService: SubscriptionsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    add(@Body() subscriptionDto: SubscriptionDto) {
        const id = this.subscriptionsService.add(subscriptionDto);
        return {id};
    }

    @Get()
    getAll() {
        return this.subscriptionsService.getAll();
    }

    @Get(':id')
    getById(@Param('id') partnerId: string) {
        return this.subscriptionsService.getById(partnerId);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    updateById(
        @Param('id') id: string,
        @Body('partnerId') partnerId: string,
        @Body('endDate') endDate: Date,
        @Body('isActive') isActive: boolean
    ) {
        this.subscriptionsService.update(id, partnerId, endDate, isActive);
        return null;
    }

    @Delete(':id')
    deleteById(@Param('id') partnerId: string) {
        this.subscriptionsService.delete(partnerId);
        return null;
    }
}
