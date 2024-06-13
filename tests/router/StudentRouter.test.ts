import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe('StudentsRouter', () =>
{
    it('login', async () =>
    {
        const res = await request.get('/api/v3/student/login?email=first_name.last_name%2B1%40gmail.com&password=1234')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.token).toEqual('e649905a37aa58c397647862118e3474')
        expect(res.body.user.id).toEqual('first_name.last_name+1@gmail.com');
    }, 10000);

    it('Login with invalid email', async () =>
    {
        const res = await request.get('/api/v3/student/login?email=invalid%2B3%40gmail.com&password=1234')
        expect(res.status).toEqual(404);
        expect(res.type).toBe('application/json');
        expect(res.body.error.message).toEqual("The student invalid+3@gmail.com does not exist. Did you forget to URL encode its email?")
    }, 10000);

    it('request all students', async () =>
    {
        const res = await request.get('/api/v3/student/all')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data.length).toEqual(100);
        expect(res.body.data[0]).toEqual({ "first_name": "first_name_1", "id": "first_name.last_name+1@gmail.com", "last_name": "last_name_1" })
    }, 10000);

    it('from token', async () =>
    {
        const res = await request.get('/api/v3/student/fromtoken?token=e649905a37aa58c397647862118e3474')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body).toEqual({ "message": "Success", "user": { "first_name": "first_name_1", "id": "first_name.last_name+1@gmail.com", "last_name": "last_name_1" } }
        );
    }, 10000);

    it('from invalid token', async () =>
    {
        const res = await request.get('/api/v3/student/fromtoken?token=invalid')
        expect(res.status).toEqual(404);
        expect(res.type).toBe('application/json');
        expect(res.body.error.message).toEqual('Student token not found');
    }, 10000);

    it('get groupstudent', async () =>
    {
        const res = await request.get('/api/v3/student/groupstudent')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data.length).toEqual(100);
        expect(res.body.data[0]).toEqual({ "group_id": "S20213-LOG121-01", "student_id": "first_name.last_name+1@gmail.com" });
    }, 10000);
});
