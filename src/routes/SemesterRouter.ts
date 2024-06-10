import { Router, Request, Response, NextFunction } from 'express';
import { SemesterController } from '../controller/SemesterController';

export class SemesterRouter {
  router: Router;
  controller: SemesterController;
  router_latency: number;
  
  /**
  * Initialize the Router
  */
  constructor() {
    this.router_latency = 0;
    this.controller = new SemesterController();
    this.router = Router();
    this.init();
  }
  /**
  * Lister les semestres
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

  init() {
    /**
    * @api {get} /api/v3/semester/all all
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
    this.router.get('/all', this.all.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }
}

// exporter its configured Express.Router
export const semesterRouter = new SemesterRouter();
semesterRouter.init();
