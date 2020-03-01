import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { MaxLength } from "class-validator";


@Entity()
export class Blog {
    @ObjectIdColumn()
    id: ObjectID;

    @MaxLength(100)
    @Column()
    title: string;
    @MaxLength(200)
    @Column()
    description: string;
    @Column()
    datePosted: Date;
}