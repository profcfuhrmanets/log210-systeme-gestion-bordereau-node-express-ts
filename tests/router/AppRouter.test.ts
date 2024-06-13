import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe('AppRouterTest', () =>
{
    it('return documentation', async () =>
    {
        const res = await request.get('/').redirects(1); // Follow up to 1 redirect
        // print the redirected url
        console.log("Redirection to: " + res.request.url);
        expect(res.status).toEqual(200);
        expect(res.type).toBe('text/html');
    }, 10000);

    it("returns a Not Found error when the requested route does not exist", async () =>
    {
        const res = await request.get('/abc');
        expect(res.status).toEqual(404);
        expect(res.type).toBe('application/json');
        expect(res.body.error.message).toBe("La route demandée n'existe pas.");
    });
});
