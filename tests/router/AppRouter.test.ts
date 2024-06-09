import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe('AppRouterTest', () => {

  it.skip('return documentation', async () => {
    const res = await request.get('/')
    expect(res.status).toEqual(200);
    expect(res.type).toBe('text/html');
  }, 10000);

});

