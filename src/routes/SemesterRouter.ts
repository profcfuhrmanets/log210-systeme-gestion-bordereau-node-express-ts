import { Router, Request, Response, NextFunction } from 'express';
import { SemesterController } from '../controller/SemesterController';

export class SemesterRouter
{
    router: Router;
    controller: SemesterController;
    router_latency: number;

    constructor()
    {
        this.router_latency = 0;
        this.controller = new SemesterController();
        this.router = Router();
        this.init();
    }

    public all(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.all()
        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    init()
    {
        /**
        * @api {get} /api/v3/semester/all Récupérer la liste de tous les semestres
        * @apiGroup Semester
        * @apiDescription Récupérer la liste de tous les semestres.
        * @apiVersion 3.0.0
        *
        * @apiSuccess (200) {JSON} data
        [
          {
            id: string,
            name: string,
            start: string,
            end: string,
          }
        ]
        */
        this.router.get('/all', this.all.bind(this));
    }
}

export const semesterRouter = new SemesterRouter();
semesterRouter.init();
