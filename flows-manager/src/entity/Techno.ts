import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Application} from "./Application";

@Entity()
export class Techno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Application, application => application.techno)
    applications: Application[];

}
