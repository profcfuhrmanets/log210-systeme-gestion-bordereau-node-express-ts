import { describe, expect, it } from 'vitest';
import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

import type { ScheduleJSON } from '../../src/model';

describe("ScheduleRouterTest", () =>
{
    it('get all Schedules', async () =>
    {
        const res = await request.get('/api/v3/Schedule/all')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');

        let Schedules: ScheduleJSON[] = require('../../src/data/schedule.json');
        expect(res.body.data).toEqual(Schedules);
    }, 10000);
});
