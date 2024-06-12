import { Router, Request, Response, NextFunction } from 'express';
import { CourseController } from '../controller/CourseController';

export class CourseRouter
{
    router: Router;
    controller: CourseController;
    router_latency: number;

    constructor()
    {
        this.router_latency = 0;
        this.controller = new CourseController();
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
         * @api {get} /api/v3/course/all Récupérer la liste de tous les cours
         * @apiGroup Cours
         * @apiDescription Retourne l'ensemble des cours du SGB.
         * @apiVersion 3.0.0
         * @apiSuccess (200) {JSON} data
         * [
         *   {
         *     id: string,
         *     titre: string
         *   }
         * ]
         */
        this.router.get('/all', this.all.bind(this));
    }
}

export const courseRouter = new CourseRouter();
courseRouter.init();
