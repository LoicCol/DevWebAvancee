import { Flow } from "../entity/Flow";
import { getManager } from "typeorm";

export class FlowRepository {

    getAllFlow() {
        // get Employee repository and find all employees
        return getManager().getRepository(Flow).find();
    }

    saveFlow(flow: Flow) {
        return getManager().getRepository(Flow).save(flow);
    }

    deleteFlow(id: number) {
        return getManager().getRepository(Flow).delete(id);
    }

    getFlow(id: number) {
        console.log('ID REPO', id);
        return getManager().getRepository(Flow).findOne(id);
    }

}
