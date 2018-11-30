import { Application } from "../entity/Application";
import { getManager } from "typeorm";

export class ApplicationRepository {

    getAllApplication() {
        // get Employee repository and find all employees
        return getManager().getRepository(Application).find();
    }

    saveApplication(application: Application) {
        return getManager().getRepository(Application).save(application);
    }

    deleteApplication(id: number) {
        return getManager().getRepository(Application).delete(id);
    }

    getApplication(id: number) {
        return getManager().getRepository(Application).findOne(id);
    }

}
