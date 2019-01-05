import { Flow } from "../entity/Flow";
import { getManager } from "typeorm";

export class FlowRepository {

    getAllFlow() {
        return getManager().getRepository(Flow).find({
            relations: ['srcApplication', 'tarApplication']
        });
    }

    saveFlow(flow: Flow) {
        return getManager().getRepository(Flow).save(flow);
    }

    deleteFlow(id: number) {
        return getManager().getRepository(Flow).delete(id);
    }

    getFlow(id: number) {
        return getManager().getRepository(Flow).findOne(id, {
            relations: ['srcApplication', 'tarApplication']
        });
    }

}
