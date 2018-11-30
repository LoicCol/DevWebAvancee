import { Techno } from "../entity/Techno";
import { getManager } from "typeorm";

export class TechnoRepository {

    getAllTechno() {
        // get Employee repository and find all employees
        return getManager().getRepository(Techno).find();
    }

    getTechno(id: number) {
        return getManager().getRepository(Techno).findOne(id);
    }

    saveTechno(techno: Techno) {
        return getManager().getRepository(Techno).save(techno);
    }

}
