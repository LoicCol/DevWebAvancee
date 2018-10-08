import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {App} from "./App";

@Entity()
export class Techno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => App, app => app.techno)
    apps: App[];

}