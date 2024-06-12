import { Router, Request, Response, NextFunction } from 'express';
import { GradeController } from '../controller/GradeController';

export class GradeRouter
{
    router: Router;
    controller: GradeController;
    router_latency: number;

    constructor()
    {
        this.router_latency = 0;
        this.controller = new GradeController();
        this.router = Router();
        this.init();
    }

    public insert(req: Request, res: Response, next: NextFunction)
    {
        var student_id = decodeURIComponent(req.body.student_id);
        var group_id = req.body.group_id;
        var type = req.body.type;
        var type_id = parseInt(req.body.type_id);
        var grade = parseFloat(req.body.grade);

        if (!student_id || !group_id || !type || !type_id || !grade)
        {
            throw new Error("Au moins un paramètre est manquant ou incorrect.");
        }

        let data = this.controller.insert(student_id, group_id, type, type_id, grade);

        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    public student(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.student(req.query.student_id as string)
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    public group(req: Request, res: Response, next: NextFunction)
    {
        let data = this.controller.group(req.query.group_id as string)
        
        res.status(200).send({
            message: 'Success',
            status: res.status,
            data: data
        });
    }

    init()
    {
        /**
        * @api {post} /api/v3/grade/insert Insérer une note
        * @apiGroup Grade
        * @apiDescription Insérer une note associée à un étudiant, un groupe cours et un devoir ou un questionnaire.
        * @apiVersion 3.0.0
        *
        * @apiBody {String} student_id Identifiant de l'étudiant.
        * @apiBody {String} group_id Identifiant du groupe.
        * @apiBody {String} type Nom de la classe correspondant au type de travail.
        * @apiBody {integer} type_id Identifiant du travail.
        * @apiBody {number} grade Note obtenue pour ce travail.
        *
        * @apiSuccess (200) {JSON} student_id:string Identifiant de l'étudiant
        */
        this.router.post('/insert', this.insert.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342

        /**
        * @api {get} /api/v3/grade/student/:student_id Récupérer les notes d'un étudiant
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
        * @api {get} /api/v3/grade/group/:group_id Récupérer les notes d'un groupe
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
        this.router.get('/group', this.group.bind(this));
    }
}

export const gradeRouter = new GradeRouter();
gradeRouter.init();
