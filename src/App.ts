import express = require('express');
import logger = require('morgan');
const path = require('path')

import { courseRouter } from './routes/CourseRouter';
import { scheduleRouter } from './routes/ScheduleRouter';
import { semesterRouter } from './routes/SemesterRouter';
import { studentRouter } from './routes/StudentRouter';
import { teacherRouter } from './routes/TeacherRouter';
import { healthRouter as healthRouter } from './routes/HealthRouter';
import { gradeRouter} from './routes/GradeRouter';


// Creates and configures an ExpressJS web server.
 
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    const staticFilesPath = path.resolve(__dirname, '../dist');
    console.log('Serving static files from:', staticFilesPath);
    this.express.use(express.static(staticFilesPath));
    this.express.use(logger('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    /* This function will change when we start to add more
     * API endpoints */
    let router = express.Router();

    router.get('/', function (req, res) {
      res.redirect('docs/index.html');
    });

    this.express.use('/api/v3/health', healthRouter.router);
    this.express.use('/api/v3/course',courseRouter.router)
    this.express.use('/api/v3/schedule',scheduleRouter.router)
    this.express.use('/api/v3/semester',semesterRouter.router)
    this.express.use('/api/v3/student',studentRouter.router)
    this.express.use('/api/v3/teacher', teacherRouter.router)
    this.express.use('/api/v3/grade',gradeRouter.router)
    this.express.use('/docs', express.static(path.join(__dirname,'docs')));
    this.express.use('/static', express.static(path.join(__dirname, 'public')));
    this.express.use('/', router);  // routage de base
  }
}

export default new App().express;
