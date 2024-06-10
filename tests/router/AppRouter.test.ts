import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe('AppRouterTest', () => {

  it('return documentation', async () => {
    const res = await request.get('/').redirects(1); // Follow up to 1 redirect
    // print the redirected url
    console.log("Redirection to: " + res.request.url);
    expect(res.status).toEqual(200);
    expect(res.type).toBe('text/html');
  }, 10000);

});

