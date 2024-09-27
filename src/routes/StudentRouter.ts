import { Router, Request, Response, NextFunction } from 'express';
import { StudentController } from '../controller/StudentController';

export class StudentRouter
{
    router: Router;
    controller: StudentController;

    constructor()
    {
        this.controller = new StudentController();
        this.router = Router();
        this.init();
    }

    public login(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.login(req.query.email as string, req.query.password as string);
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            token: data.token,
            user: data.user
        });
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

    public fromtoken(req: Request, res: Response, next: NextFunction)
    {
        let token: string = req.query.token as string;
        let data = this.controller.fromToken(token);
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            user: data
        });
    }

    public groupstudent(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.groupStudent();
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    init()
    {
        /**
        * @api {get} /api/v3/student/login?email=:email&password=:password S'authentifier en tant qu'étudiant et obtenir un jeton d'authentification
        * @apiGroup Student
        * @apiDescription Authentification de l'étudiant et récupération du jeton d'authentification.
        * @apiVersion 3.0.0
        * @apiQuery {String} email Courriel de l'étudiant. Vous devez encoder email avec <a href="https://www.w3schools.com/tags/ref_urlencode.ASP">URL Encode</a>.
        * @apiQuery {String} password N'est pas vérifié.
        *
        * @apiSuccess (200) {String}  message Success
        * @apiSuccess (200) {String}  token Jeton d'authentification à inclure dans les requêtes subséquentes.
        * @apiSuccess (200) {JSON}  user {first_name: string, last_name: string, id: string}
        */
        this.router.get('/login', this.login.bind(this));

        /**
        * @api {get} /api/v3/student/all Récupérer tous les étudiants
        * @apiGroup Student
        * @apiDescription Récupérer tous les étudiants.
        * @apiVersion 3.0.0
        * @apiSuccess (200) {JSON}  data [{
        *   first_name: string,
        *   last_name: string,
        *   id: string that match email
        * }]
        */
        this.router.get('/all', this.all.bind(this));


        /**
        * @api {get} /api/v3/student/fromtoken/:token Récupérer un étudiant à partir de son jeton d'authentification.
        * @apiGroup Student
        * @apiDescription Récupérer un étudiant à partir de son jeton d'authentification.
        * @apiVersion 3.0.0
        *
        * @apiParam {String} token Jeton d'authentification.
        *
        * @apiSuccess (200) {JSON}   data { 
        *   first_name: string,
        *   last_name: string,
        *   id: string,
        *    }
        */
        this.router.get('/fromtoken', this.fromtoken.bind(this));

        /**
        * @api {get} /api/v3/student/groupstudent Récupérer le lien entre les étudiants et les groupes
        * @apiGroup Student
        * @apiDescription Récupérer le lien entre les étudiants et les groupes.
        * @apiVersion 3.0.0
        *
        * @apiSuccess (200) {JSON}   data [{ 
        *   group_id: string,
        *   student_id: string
        *    }
        */
        this.router.get('/groupstudent', this.groupstudent.bind(this));
    }

}

export const studentRouter = new StudentRouter();
studentRouter.init();
