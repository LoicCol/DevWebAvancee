import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    email: string;

    /*
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    */

    @Column({ length: 100, nullable: true })
    password: string;

    @Column({ length: 100, nullable: true })
    passwordHash: string;

}
