import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

import type { SemesterJSON } from '../../src/model';

describe("SemesterRouterTest", () =>
{
    it('get all semesters', async () =>
    {
        const res = await request.get('/api/v3/semester/all')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');

        let semesters: SemesterJSON[] = require('../../src/data/semester.json');
        expect(res.body.data).toEqual(semesters);
    }, 10000);
});
