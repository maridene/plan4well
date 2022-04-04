import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from './subscription.model';
import { SubscriptionDto } from "./subscriptions.dto";

@Injectable()
export class SubscriptionsService {

    constructor(
        @InjectRepository(Subscription)
        private readonly subscriptionRepository: Repository<Subscription>
    ) {}

    add(subscriptionDto: SubscriptionDto) {
        const id = uuidv4();
        const subscription = new Subscription(
            id, 
            subscriptionDto.partnerId, 
            subscriptionDto.endDate, 
            subscriptionDto.isActive);
        subscription.lastRenewDate = new Date();
        this.subscriptionRepository.create(subscription);
        this.subscriptionRepository.save(subscription);
        return id;
    }

    getAll() {
        return this.subscriptionRepository.find();
    }

    async getById(id: string) {
        return this.subscriptionRepository.findOne(id);
    }

    async update(id: string, partnerId: string, endDate: Date, isActive: boolean) {
        const subscription = await this.getById(id);
        if (!subscription) {
            throw new NotFoundException('Could not find subscription.');
        }
        if (partnerId) {
            subscription.partnerId = partnerId;
        }
        if (endDate) {
            subscription.endDate = endDate;
        }
        if (isActive !== null && isActive !== undefined) {
            subscription.isActive = isActive;
        }
        subscription.lastModificationDate = new Date();
        this.subscriptionRepository.save(subscription);
    }

    async delete(id: string) {
        const subscription = await this.getById(id);
        if (!subscription) {
            throw new NotFoundException('Could not find subscription.');
        }
        return this.subscriptionRepository.delete(id);
    }
}