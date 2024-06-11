import { Router, Request, Response, NextFunction } from 'express';
import { ScheduleController } from '../controller/ScheduleController';

export class ScheduleRouter
{
    router: Router;
    controller: ScheduleController;
    router_latency: number;

    constructor()
    {
        this.router_latency = 0;
        this.controller = new ScheduleController();
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
        * @api {get} /api/v3/Schedule/all Récupérer tous les horaires des groupes-cours
        * @apiGroup Schedule
        * @apiDescription Récupérer la liste de tous les horaires des groupes-cours.
        * @apiVersion 3.0.0
        *
        * @apiSuccess (200) {JSON}  data
        [
          {
            group_id: string,
            day: string,
            hours: string,
            activity: string,
            mode: string,
            local: string,
            teacher_id: string
          }
        ]
        */
        this.router.get('/all', this.all.bind(this));
    }
}

export const scheduleRouter = new ScheduleRouter();
scheduleRouter.init();
