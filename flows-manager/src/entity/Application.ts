import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Techno} from "./Techno";
import {Flow} from "./Flow";

@Entity()
export class Application {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Techno, techno => techno.applications)
    techno: Techno;

    @OneToMany(type => Flow, flow => flow.srcApplication)
    srcFlows: Flow[];

    @OneToMany(type => Flow, flow => flow.tarApplication)
    tarFlows: Flow[];

}
