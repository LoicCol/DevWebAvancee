import { Request, Response } from "express";
import { FlowRepository } from "../repository/FlowRepository";
import { ApplicationRepository } from "../repository/ApplicationRepository";
import { Flow } from "../entity/Flow";

const flowRepo: FlowRepository = new FlowRepository();
const appRepo: ApplicationRepository = new ApplicationRepository();

export let getAllFlow = async (req: Request, res: Response) => {
    console.log("Received GetAllFlow ==> GET");

    flowRepo.getAllFlow().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);

    });
};

export let saveFlow = async (req: Request, res: Response) => {
    console.log("Received SaveFlow ==> POST");
    console.log(req.body);

    let flow:Flow = new Flow();
    flow.name = req.body.name;
    flow.description = req.body.description;
    flow.srcApplication = await appRepo.getApplication(req.body.srcAppId);
    flow.tarApplication = await appRepo.getApplication(req.body.tarAppId);

    flowRepo.saveFlow(flow).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let updateFlow = async (req: Request, res: Response) => {
    console.log("Received UpdateFlow ==> PUT");
    console.log('REQUEST', req.body);

    const flow: Flow = await flowRepo.getFlow(req.body.id);

    flow.name = req.body.name;
    flow.description = req.body.description;
    flow.srcApplication = await appRepo.getApplication(req.body.srcAppId);
    flow.tarApplication = await appRepo.getApplication(req.body.tarAppId);

    flowRepo.saveFlow(flow).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let deleteFlow = async (req: Request, res: Response) => {
    console.log("Received DeleteFlow ==> PATCH");
    console.log(req.body);

    let id:number = req.body.id;

    flowRepo.deleteFlow(id).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
