import { Router, Request, Response, NextFunction } from 'express';
import { ScheduleController } from '../controller/ScheduleController';

export class ScheduleRouter {
  router: Router;
  controller: ScheduleController;
  router_latency: number;
  
  /**
  * Initialize the Router
  */
  constructor() {
    this.router_latency = 0;
    this.controller = new ScheduleController();
    this.router = Router();
    this.init();
  }
  /**
  * Lister les groupes-cours
  */
  public all(req: Request, res: Response, next: NextFunction) {
    let data = this.controller.all()
    res.status(200)
    .send({
      message: 'Success',
      status: res.status,
      data: data
    });
  }

  /**
  * Take each handler, and attach to one of the Express.Router's
  * endpoints.
  */
  init() {
    /**
    * @api {get} /api/v3/Schedule/all all
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
    this.router.get('/all', this.all.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }
}

// exporter its configured Express.Router
export const scheduleRouter = new ScheduleRouter();
scheduleRouter.init();
