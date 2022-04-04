import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { PartnerDto } from "./partner.dto";
import { Partner } from "./partner.model";

@Injectable()
export class PartnersService {
    
    constructor(
        @InjectRepository(Partner)
        private readonly partnerRepository: Repository<Partner>
    ) {}

    add(partnerDto: PartnerDto) {
        const id = uuidv4();
        const partner = new Partner(
            id,
            partnerDto.firstname, 
            partnerDto.lastname, 
            partnerDto.username, 
            partnerDto.password);
        this.partnerRepository.create(partner);
        this.partnerRepository.save(partner);
        return id;
    }

    getAll() {
        return this.partnerRepository.find();
    }

    async getById(id: string) {
        return this.partnerRepository.findOne(id);
    }

    async update(id: string, firstname: string, lastname: string, username: string, password: string) {
        const partner = await this.getById(id);
        if (!partner) {
            throw new NotFoundException('Could not find partner.');
        }
        if (firstname) {
            partner.firstname = firstname;
        }
        if (lastname) {
            partner.lastname = lastname;
        }
        if (username) {
            partner.username = username;
        }
        if (password) {
            partner.passowrd = password;
        }
        partner.lastModificationDate = new Date();
        this.partnerRepository.save(partner);
    }

    async delete(id: string) {
        const partner = await this.getById(id);
        if (!partner) {
            throw new NotFoundException('Could not find partner.');
        }
        return this.partnerRepository.delete(id);
    }
}