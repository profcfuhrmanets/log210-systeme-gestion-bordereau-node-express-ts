import { log } from 'debug';
import { Router, Request, Response, NextFunction } from 'express';
import { GradeController } from '../controller/GradeController';

export class GradeRouter {
  router: Router;
  controller: GradeController;
  router_latency: number;
  
  /**
  * Initialize the Router
  */
  constructor() {
    this.router_latency = 0;
    this.controller = new GradeController();
    this.router = Router();
    this.init();
  }
  
  public insert(req: Request, res: Response, next: NextFunction) {
      let data = this.controller.insert(req.query);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          data: data
        });    
    }
    
    public student(req: Request, res: Response, next: NextFunction) {
      let data = this.controller.student(req.query.student_id as string)
      res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        data: data
      });
    }
    
    public group(req: Request, res: Response, next: NextFunction) {
      let data = this.controller.group(req.query.group_id as string)
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
      * @api {get} /api/v3/grade/insert insert
      * @apiGroup Grade
      * @apiDescription Insérer une note associée à un étudiant, un groupe cours et un devoir ou un questionnaire.
      * @apiVersion 3.0.0
      
      * @apiParam {String} student_id Identifiant de l'étudiant.
      * @apiParam {String} group_id Identifiant du groupe.
      * @apiParam {String} type Nom de la classe correspondant au type de travail.
      * @apiParam {integer} type_id Identifiant du travail.
      * @apiParam {number} note Note obtenue pour ce travail.
      *
      * @apiSuccess (200) {JSON}  data
      [
        {
          student_id:string,
          group_id:string,
          type:string,
          type_id:integer,
          note: number
        }
      ]
      */
      this.router.get('/insert', this.insert.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
      
      
      /**
      * @api {get} /api/v3/grade/student student
      * @apiGroup Grade
      * @apiDescription Liste des notes d'un étudiant.
      * @apiVersion 3.0.0
      *
      * @apiParam {String} student_id Identifiant de l'étudiant.
      
      * @apiSuccess (200) {JSON}  data
      [
        {
          student_id: string,
          group_id:string,
          type:string,
          type_id:integer,
          note: number
        }
      ]
      */
      this.router.get('/student', this.student.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
      
      /**
      * @api {get} /api/v3/grade/group group
      * @apiGroup Grade
      * @apiDescription Liste des notes d'un groupe.
      * @apiVersion 3.0.0
      *
      * @apiParam {String} group_id Identifiant du groupe.
      
      * @apiSuccess (200) {JSON}  data
      [
        {
          student_id:string,
          group_id:string,
          type:string,
          type_id:integer,
          note: number
        }
      ]
      */
      this.router.get('/group', this.group.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
      
    }
  }
  
  // exporter its configured Express.Router
  export const gradeRouter = new GradeRouter();
  gradeRouter.init();
  