import { Request, Response } from "express";
import { TechnoRepository } from "../repository/TechnoRepository";
import { Techno } from "../entity/Techno";

export let getAllTechno = async (req: Request, res: Response) => {
    let techRepo: TechnoRepository = new TechnoRepository();

    console.log("Received GetAllTechno ==> GET");

    techRepo.getAllTechno().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });


};

export let saveTechno = async (req: Request, res: Response) => {
    let techRepo: TechnoRepository = new TechnoRepository();

    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);

    let tech:Techno = new Techno();
    tech.name = req.body.name;
    tech.apps = req.body.apps;

    techRepo.saveTechno(tech).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};