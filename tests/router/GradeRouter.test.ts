import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

var grade = {
    "student_id": "first_name.last_name%2B1%40gmail.com",
    "group_id": "S20213-LOG210-01",
    "type": "Devoir1",
    "type_id": 2,
    "grade": 75.1
};

var expected = {
    "student_id": "first_name.last_name+1@gmail.com",
    "group_id": "S20213-LOG210-01",
    "type": "Devoir1",
    "type_id": 2,
    "grade": 75.1
};

describe("GradeRouterTest", () =>
{
    it('GradeRouterTest insert grade', async () =>
    {
        let res = await request.post('/api/v3/grade/insert').send(grade);

        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data).toEqual("first_name.last_name+1@gmail.com");

        res = await request.get('/api/v3/grade/student?student_id=first_name.last_name%2B1%40gmail.com')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data).toMatchObject([expected]);

        res = await request.get('/api/v3/grade/group?group_id=S20213-LOG210-01')
        expect(res.status).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body.data).toMatchObject([expected]);
    }, 10000);

    it("allows the grade of 0", async () =>
    {
        let res = await request.post('/api/v3/grade/insert').send({
            "student_id": "first_name.last_name%2B1%40gmail.com",
            "group_id": "S20213-LOG210-01",
            "type": "Devoir1",
            "type_id": 2,
            "grade": 0
        });

        expect(res.status).toBe(200);
    });

    it("allows the type of 0", async () =>
        {
            let res = await request.post('/api/v3/grade/insert').send({
                "student_id": "first_name.last_name%2B1%40gmail.com",
                "group_id": "S20213-LOG210-01",
                "type": "Devoir1",
                "type_id": 0,
                "grade": 100
            });
    
            expect(res.status).toBe(200);
        });

    it("returns an error when a parameter is missing or is not of the right type", async () =>
    {
        let res = await request.post('/api/v3/grade/insert').send({
            "student_id": "first_name.last_name%2B1%40gmail.com",
            "group_id": "S20213-LOG210-01",
            "type": "Devoir1",
            "type_id": 2,
        });

        expect(res.status).toBe(400);
    });

    it("returns an error when the grade is negative", async () =>
    {
        let res = await request.post('/api/v3/grade/insert').send({
            "student_id": "first_name.last_name%2B1%40gmail.com",
            "group_id": "S20213-LOG210-01",
            "type": "Devoir1",
            "type_id": 2,
            "grade": -1
        });

        expect(res.status).toBe(400);
        expect(res.body.error.message).toBe("The grade cannot be lower than 0.")
    });
});
