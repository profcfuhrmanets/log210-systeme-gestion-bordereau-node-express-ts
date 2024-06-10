import { Router, Request, Response, NextFunction } from 'express';
import { TeacherController } from '../controller/TeacherController';

export class TeacherRouter {
  router: Router;
  controller: TeacherController;  // contrôleur GRASP
  router_latency: number;

  /**
  * Initialize the Router
  */
  constructor() {
    this.router_latency = 0;
    this.controller = new TeacherController();  // init contrôleur GRASP
    this.router = Router();
    this.init();
  }

  public login(req: Request, res: Response, next: NextFunction) {
    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      let data = this.controller.login(
        req.query.email as string,
        req.query.password as string);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          token: data.token,
          user: data.user
        });
    } catch (error: any) {
      console.error(error);
      let code = 500; // internal server error
      res.status(code).json({ error: error.toString() });
    }
  }

  public all(req: Request, res: Response, next: NextFunction) {
    let data = this.controller.all()
    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        data: data
      });
  }

  public fromtoken(req: Request, res: Response, next: NextFunction) {
    try {
      let token: string = req.query.token as string; // Cast the value to string

      let data = this.controller.fromToken(token);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          user: data
        });
    } catch (error: any) {
      console.error(error);
      let code = 500; // internal server error
      res.status(code).json({ error: error.toString() });
    }
  }


  //apidoc -i src/routes/ -o docs/

  /**
  * Take each handler, and attach to one of the Express.Router's
  * endpoints.
  */
  init() {

    /**
      * @api {get} /api/v3/teacher/login login
      * @apiGroup Teacher
      * @apiDescription Authentification de l'enseignant et récupération du jeton d'authentificationé
      * @apiVersion 3.0.0
      * @apiParam {String} email Courriel de l'enseignant. Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP.
      * @apiParam {String} password N'est pas vérifié.
      *
      * @apiSuccess (200) {String}  message Success
      * @apiSuccess (200) {String}  token Jeton d'authentification à inclure dans les requêtes subséquentes.
      * @apiSuccess (200) {JSON}  user {
      *   first_name:string,
      *   last_name: string,
      *   id: string 
      * }
      */
    this.router.get('/login', this.login.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342

    /**
    * @api {get}/api/v3/teacher/all all
    * @apiGroup Teacher
    * @apiDescription récupération de tout les enseignant
    * @apiVersion 3.0.0
    * @apiSuccess (200) {JSON} user [{
    *   first_name: string,
    *   last_name: string,
    *   id: string 
    * }]
    */
    this.router.get('/all', this.all.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342


    /**
      * @api {get}/api/v3/teacher/all all
      * @apiGroup Teacher
      * @apiDescription Récupérer tous les enseignants.
      * @apiVersion 3.0.0
      * @apiSuccess (200) {JSON} user [{
      *   first_name: string,
      *   last_name: string,
      *   id: string 
      * }]
      */
    this.router.get('/fromtoken', this.fromtoken.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }
}


// exporter its configured Expres.Router
export const teacherRouter = new TeacherRouter();
teacherRouter.init();
