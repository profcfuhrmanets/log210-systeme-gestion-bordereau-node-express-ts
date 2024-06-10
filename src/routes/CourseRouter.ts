import { Router, Request, Response, NextFunction } from 'express';
import { CourseController } from '../controller/CourseController';

export class CourseRouter {
    router: Router;
    controller: CourseController;
    router_latency: number;

    /**
    * Initialize the Router
    */
    constructor() {
      this.router_latency = 0;
      this.controller = new CourseController();
      this.router = Router();
      this.init();
    }

     /**
    * Lister les cours
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
     * @api {get} /api/v3/course/all all
     * @apiGroup Cours
     * @apiDescription Récupérer la liste de tous les cours.
     * @apiVersion 3.0.0
     *
     * @apiSuccess (200) {JSON} data
     * [
     *   {
     *     id: string,
     *     titre: string
     *   }
     * ]
     */
     this.router.get('/all', this.all.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    }
}

// exporter its configured Express.Router
export const courseRouter = new CourseRouter();
courseRouter.init();
