import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);
import type { CourseJSON, StudentJSON } from '../../src/model';

describe("CourseRouterTest", () => {

      it('get all courses', async () => {
        const res = await request.get('/api/v3/course/all')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        
        let courses: CourseJSON[] = require('../../src/data/courses.json');
        expect(res.body.data).toEqual(courses);
      }, 10000);

});
