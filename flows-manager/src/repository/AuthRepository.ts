import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";
import * as jwt from 'jsonwebtoken';

export class AuthRepository {

    userRepository: UserRepository = new UserRepository();

    async createToken(id: number, email: string) {
        const expiresIn = 60 * 60;
        const secretOrKey = 'secret';
        const user = { email };
        const token = jwt.sign(user, secretOrKey, { expiresIn });

        return { expires_in: expiresIn, token };
    }

    async validateUser(signedUser: User): Promise<boolean> {
        if (signedUser && signedUser.email) {
            return Boolean(this.userRepository.getUserByUsername(signedUser.email));
        }

        return false;
    }

}
