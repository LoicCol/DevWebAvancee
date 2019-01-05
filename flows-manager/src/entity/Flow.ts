import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Application} from "./Application";

@Entity()
export class Flow {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Application, application => application.srcFlows, { onDelete: 'CASCADE' })
    srcApplication: Application;

    @ManyToOne(type => Application, application => application.tarFlows, { onDelete: 'CASCADE' })
    tarApplication: Application;

}
