import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {App} from "./App";

@Entity()
export class Flow {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => App, app => app.srcFlows)
    srcApp: App;

    @ManyToOne(type => App, app => app.tarFlows)
    tarApp: App;

}
