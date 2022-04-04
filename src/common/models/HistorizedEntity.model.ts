import { Column } from "typeorm";

export class HistorizedEntity {
    @Column()
    creationDate: Date;
    
    @Column()
    lastModificationDate: Date;

    constructor() {
        this.creationDate = new Date();
        this.lastModificationDate = new Date();
    }

    setModificationDate(date: Date) {
        this.lastModificationDate = date;
    }

    setModified() {
        this.lastModificationDate = new Date();
    }
}