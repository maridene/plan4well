import { Column, Entity, PrimaryColumn } from "typeorm";
import { HistorizedEntity } from "src/common/models/HistorizedEntity.model";

@Entity()
export class Partner extends HistorizedEntity {
    
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false
    })
    firstname: string;

    @Column({
        nullable: false
    })
    lastname: string;
    
    @Column({
        nullable: false
    })
    username: string;

    @Column()
    passowrd: string;

    constructor(id: string, firstname: string, lastname: string, username: string, password: string) {
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.passowrd = password;
    }
}
