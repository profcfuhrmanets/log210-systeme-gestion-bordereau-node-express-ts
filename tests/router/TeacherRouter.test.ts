import { describe, expect, it } from 'vitest';
import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe('TeacherRouteTest', () =>
{
    it('Login teacher', async () =>
    {
        const res = await request.get('/api/v3/teacher/login?email=cc-yvan.ross%40etsmtl.ca&password=1234')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.token).toEqual("7f1b6b7c407b1292560e61a21e47d645")
        expect(res.body.user.id).toEqual('cc-yvan.ross@etsmtl.ca')
    }, 10000);

    it('Login  fail', async () =>
    {
        const res = await request.get('/api/v3/teacher/login?email=teacher%2B100%40gmail.com&password=1234')
        expect(res.status).toEqual(404);
        expect(res.type).toBe('application/json');
        expect(res.body.error.message).toEqual("The teacher teacher+100@gmail.com does not exist. Did you forget to URL encode its email?")
    }, 10000);

    it('get all teacher', async () =>
    {
        const res = await request.get('/api/v3/teacher/all')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data.length).toEqual(8)
        expect(res.body.data[0]).toEqual({ "first_name": "Vincent", "id": "cc-vincent.lacasse@etsmtl.ca", "last_name": "Lacasse" });
    }, 10000);

    it('from teacher token', async () =>
    {
        const res = await request.get('/api/v3/teacher/fromtoken?token=7f1b6b7c407b1292560e61a21e47d645')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.user.id).toEqual('cc-yvan.ross@etsmtl.ca')
    }, 10000);

    it('from teacher with invalid token', async () =>
    {
        const res = await request.get('/api/v3/teacher/fromtoken?token=invalid')
        expect(res.status).toEqual(404);
        expect(res.type).toBe('application/json');
        expect(res.body.error.message).toEqual('Teacher token not found')
    }, 10000);
});
