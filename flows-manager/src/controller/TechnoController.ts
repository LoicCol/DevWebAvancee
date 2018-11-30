import { Request, Response } from "express";
import { TechnoRepository } from "../repository/TechnoRepository";
import { Techno } from "../entity/Techno";

const techRepo: TechnoRepository = new TechnoRepository();

export let getAllTechno = async (req: Request, res: Response) => {
    console.log("Received GetAllTechno ==> GET");

    techRepo.getAllTechno().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getTechno = async (req: Request, res: Response) => {
    console.log("Received GetTechno ==> GET");
    techRepo.getTechno(req.params.id).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let saveTechno = async (req: Request, res: Response) => {
    console.log("Received SaveEmployee ==> POST");
    let tech:Techno = new Techno();
    tech.name = req.body.name;

    techRepo.saveTechno(tech).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
