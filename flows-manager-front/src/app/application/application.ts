import {Techno} from "../techno/techno";
import {Flow} from "../flow/flow";

export class Application {
    id: number;

    name: string;

    techno: Techno;

    srcFlows: Flow[];

    tarFlows: Flow[];
}
