import { Request, Response } from "express";
import { ApplicationRepository } from "../repository/ApplicationRepository";
import { TechnoRepository } from "../repository/TechnoRepository";
import { Application } from "../entity/Application";

const appRepo: ApplicationRepository = new ApplicationRepository();
const techRepo: TechnoRepository = new TechnoRepository();

export let getAllApp = async (req: Request, res: Response) => {
    console.log("Received GetAllApp ==> GET");

    appRepo.getAllApplication().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);

    });
};

export let saveApp = async (req: Request, res: Response) => {
    console.log("Received SaveApp ==> POST");
    console.log(req.body);

    let app:Application = new Application();
    app.name = req.body.name;
    app.description = req.body.description;
    app.team = req.body.team;
    app.techno = await techRepo.getTechno(req.body.technoId);

    appRepo.saveApplication(app).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let updateApp = async (req: Request, res: Response) => {
    console.log("Received UpdateApp ==> POST");
    console.log(req.body);

    let app:Application = new Application();
    app.id = req.body.id;
    app.name = req.body.name;
    app.description = req.body.description;
    app.team = req.body.team;
    app.techno = await techRepo.getTechno(req.body.technoId);

    appRepo.saveApplication(app).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let deleteApp = async (req: Request, res: Response) => {
    console.log("Received DeleteApp ==> PATCH");
    console.log(req.body);

    let id:number = req.body.id;

    appRepo.deleteApplication(id).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

