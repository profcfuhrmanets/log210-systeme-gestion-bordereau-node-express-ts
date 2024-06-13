import express = require('express');
import { Request, Response, NextFunction } from 'express';
import logger = require('morgan');
const path = require('path')

import { courseRouter } from './routes/CourseRouter';
import { scheduleRouter } from './routes/ScheduleRouter';
import { semesterRouter } from './routes/SemesterRouter';
import { studentRouter } from './routes/StudentRouter';
import { teacherRouter } from './routes/TeacherRouter';
import { healthRouter as healthRouter } from './routes/HealthRouter';
import { gradeRouter } from './routes/GradeRouter';
import AbstractError from './errors/AbstractError';
import { InternalError } from './errors/InternalError';
import { NotFoundError } from './errors/NotFoundError';

/**
 * Creates and configures an ExpressJS web server
 */
class App
{
    public express: express.Application;

    /**
     * Run configuration methods on the Express instance
     */
    constructor()
    {
        this.express = express();
        this.middleware();
        this.routes();
        this.express.use(this.errorHandler);
    }

    /**
     * Configure Express middlewares
     */
    private middleware(): void
    {
        const staticFilesPath = path.resolve(__dirname, '../dist');
        console.log('Serving static files from:', staticFilesPath);
        this.express.use(express.static(staticFilesPath));
        this.express.use(logger('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    /**
     * Configure API endpoints
     */
    private routes(): void
    {
        let router = express.Router();

        router.get('/', function (req, res)
        {
            res.redirect('docs/index.html');
        });

        this.express.use('/api/v3/health', healthRouter.router);
        this.express.use('/api/v3/course', courseRouter.router)
        this.express.use('/api/v3/schedule', scheduleRouter.router)
        this.express.use('/api/v3/semester', semesterRouter.router)
        this.express.use('/api/v3/student', studentRouter.router)
        this.express.use('/api/v3/teacher', teacherRouter.router)
        this.express.use('/api/v3/grade', gradeRouter.router)
        this.express.use('/docs', express.static(path.join(__dirname, 'docs')));
        this.express.use('/static', express.static(path.join(__dirname, 'public')));
        this.express.use('/', router);
        this.express.use(function(req:Request, res:Response)
        {
            throw new NotFoundError("La route demandée n'existe pas.");
        });
    }

    /**
     * Logs the errors in the console and sends them as JSON to the caller
     * @param error The error to handle
     * @param req The request object
     * @param res The response object
     * @param next The next function to call
     */
    private errorHandler(error:Error, req:Request, res:Response, next:NextFunction)
    {
        var myError:AbstractError;

        if (error instanceof AbstractError)
        {
            myError = error;
        }
        else
        {
            myError = new InternalError();
        }

        console.log(error);
        res.status(myError.code).json({"error": myError});
    }
}

export default new App().express;
