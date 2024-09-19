import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("leads")
export class Lead {
    @ObjectIdColumn()
    _id?: ObjectId;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone?: string;
}
