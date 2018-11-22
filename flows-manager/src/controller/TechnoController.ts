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

export let saveTechno = async (req: Request, res: Response) => {
    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);

    let tech:Techno = new Techno();
    tech.name = req.body.name;
    tech.applications = req.body.applications;

    techRepo.saveTechno(tech).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
