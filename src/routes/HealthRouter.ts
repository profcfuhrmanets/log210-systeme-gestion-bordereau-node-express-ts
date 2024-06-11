import { Router, Request, Response, NextFunction } from 'express';

export class HealthRouter
{
    router: Router;

    constructor()
    {
        this.router = Router();
        this.init();
    }

    public ping(req: Request, res: Response, next: NextFunction)
    {
        res.status(200).send({
            message: 'Success',
            status: res.status,
        });
    }

    init()
    {
        /**
        * @api {get} /api/v3/health/ping Écho pour confirmer le fonctionnement du SGB
        * @apiGroup Health
        * @apiDescription Écho pour confirmer le fonctionnement du SGB.
        * @apiVersion 3.0.0
        *
        * @apiSuccess (200) Success
        */
        this.router.get('/ping', this.ping.bind(this));
    }
}

export const healthRouter = new HealthRouter();
healthRouter.init();
