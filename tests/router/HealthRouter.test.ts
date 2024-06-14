import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe("HealthRouterTest", () =>
{
    it('ping', async () =>
    {
        const res = await request.get('/api/v3/health/ping')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.message).toEqual("Success")
    }, 10000);
});
