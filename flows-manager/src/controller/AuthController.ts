import { Request, Response } from "express";
import { AuthRepository } from '../repository/AuthRepository';
import { UserRepository } from '../repository/UserRepository';
import { User } from '../entity/User';

const userRepo: UserRepository = new UserRepository();
const authRepo: AuthRepository = new AuthRepository();
const status = require('http-status');

export let loginUser = async (req: Request, res: Response) => {
    if (!(req.body && req.body.email && req.body.password)) {
        return res.status(status.FORBIDDEN).json({ message: 'Email and password are required!' });
    }

    const user:User = await userRepo.getUserByUsername(req.body.email);

    if (user) {
        if (await userRepo.compareHash(req.body.password, user.passwordHash)) {
            return res.status(status.OK).json(await authRepo.createToken(user.id, user.email));
        }
    }

    return res.status(status.FORBIDDEN).json({ message: 'Email or password wrong!' });
};

export let registerUser = async (req: Request, res: Response) => {
    if (!(req.body && req.body.email && req.body.password)) {
        return res.status(status.FORBIDDEN).json({ message: 'Email and password are required!' });
    }

    let user:User = await userRepo.getUserByUsername(req.body.email);

    if (user) {
       return  res.status(status.FORBIDDEN).json({ message: 'Email exists' });
    } else {
        user = await userRepo.saveUser(req.body);
        if (user) {
            user.passwordHash = undefined;
        }
    }

    return res.status(status.OK).json(user);
};
