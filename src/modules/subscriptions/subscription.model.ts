import { HistorizedEntity } from "src/common/models/HistorizedEntity.model";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Subscription extends HistorizedEntity {

    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false
    })
    partnerId: string;

    @Column()
    endDate: Date;

    @Column({
        nullable: false
    })
    isActive: boolean;

    @Column()
    lastRenewDate: Date;

    constructor(id: string, partnerId: string, endDate: Date, isActive: boolean) {
        super();
        this.id = id;
        this.partnerId = partnerId;
        this.endDate = endDate;
        this.isActive = isActive;
    }

}
