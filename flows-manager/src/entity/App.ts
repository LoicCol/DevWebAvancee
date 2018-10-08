import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Techno} from "./Techno";
import {Flow} from "./Flow";

@Entity()
export class App {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Techno, techno => techno.apps)
    techno: Techno;

    @OneToMany(type => Flow, flow => flow.srcApp)
    srcFlows: App[];

    @OneToMany(type => Flow, flow => flow.tarApp)
    tarFlows: App[];

}
