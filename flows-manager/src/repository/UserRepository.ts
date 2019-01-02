import { User } from "../entity/User";
import * as bcrypt from 'bcrypt';
import { getManager } from "typeorm";

export class UserRepository {

    private saltRounds = 10;

    async getUserByUsername(email: string) {
        return await getManager().getRepository(User).findOne({ where : { "email" : email } });
    }

    async getAllUser() {
        return await getManager().getRepository(User).find();
    }

    async saveUser(user: User) {
        user.passwordHash = await this.getHash(user.password);

    
        // clear password as we don't persist passwords
        user.password = undefined;
        return await getManager().getRepository(User).save(user);
    }

    async deleteApplication(id: number) {
        return await getManager().getRepository(User).delete(id);
    }

    async getApplication(id: number) {
        return await getManager().getRepository(User).findOne(id);
    }

    async getHash(password: string) {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: string, hash: string){
        return bcrypt.compare(password, hash);
    }

}
