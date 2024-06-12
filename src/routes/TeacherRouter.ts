import { Router, Request, Response, NextFunction } from 'express';
import { TeacherController } from '../controller/TeacherController';

export class TeacherRouter
{
    router: Router;
    controller: TeacherController;
    router_latency: number;

    constructor()
    {
        this.router_latency = 0;
        this.controller = new TeacherController();
        this.router = Router();
        this.init();
    }

    public login(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            let data = this.controller.login(req.query.email as string, req.query.password as string);

            res.status(200).send({
                message: 'Success',
                status: res.status,
                token: data.token,
                user: data.user
            });
        }
        catch (error: any)
        {
            console.error(error);
            res.status(500).json({ error: error.toString() });
        }
    }

    public all(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.all();
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    public fromtoken(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            let token: string = req.query.token as string;

            let data = this.controller.fromToken(token);
            
            res.status(200).send({
                message: 'Success',
                status: res.status,
                user: data
            });
        }
        catch (error: any)
        {
            console.error(error);
            res.status(500).json({ error: error.toString() });
        }
    }

    init()
    {

        /**
          * @api {get} /api/v3/teacher/login?email=:email&password=:password S'authentifier en tant qu'enseignant et obtenir un jeton d'authentification
          * @apiGroup Teacher
          * @apiDescription Authentification de l'enseignant et récupération du jeton d'authentification
          * @apiVersion 3.0.0
          * @apiQuery {String} email Courriel de l'enseignant. Vous devez encoder email avec <a href="https://www.w3schools.com/tags/ref_urlencode.ASP">URL Encode</a>.
          * @apiQuery {String} password N'est pas vérifié.
          *
          * @apiSuccess (200) {String}  message Success
          * @apiSuccess (200) {String}  token Jeton d'authentification à inclure dans les requêtes subséquentes.
          * @apiSuccess (200) {JSON}  user {
          *   first_name:string,
          *   last_name: string,
          *   id: string 
          * }
          */
        this.router.get('/login', this.login.bind(this));

        /**
        * @api {get}/api/v3/teacher/all Récupération de tous les enseignants
        * @apiGroup Teacher
        * @apiDescription Récupération de tous les enseignants.
        * @apiVersion 3.0.0
        * @apiSuccess (200) {JSON} user [{
        *   first_name: string,
        *   last_name: string,
        *   id: string 
        * }]
        */
        this.router.get('/all', this.all.bind(this));


        /**
          * @api {get}/api/v3/teacher/fromtoken?token=:token Récupérer un enseignant à partir de son jeton d'authentification
          * @apiGroup Teacher
          * @apiDescription Récupérer un enseignant à partir de son jeton d'authentification.
          * @apiVersion 3.0.0
          * @apiQuery {String} token Jeton d'authentification de l'enseignant.
          * 
          * @apiSuccess (200) {JSON} user {
          *   first_name: string,
          *   last_name: string,
          *   id: string 
          * }
          */
        this.router.get('/fromtoken', this.fromtoken.bind(this));
    }
}

export const teacherRouter = new TeacherRouter();
teacherRouter.init();
