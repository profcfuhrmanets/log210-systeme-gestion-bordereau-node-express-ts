import app from '../../src/App';
import supertest from 'supertest';
const request = supertest(app);

describe("GradeRouterTest", () => {
  
  it('GradeRouterTest insert grade', async () => {
    let res;
    res = await request.get('/api/v3/grade/insert?student_id=first_name.last_name%2B1%40gmail.com&group_id=S20213-LOG210-01&type=Devoir1&type_id=2&note=75.1')
    expect(res.status).toEqual(200);
    expect(res.type).toBe('application/json');
    expect(res.body.data).toEqual("first_name.last_name+1@gmail.com");
    
    res = await request.get('/api/v3/grade/student?student_id=first_name.last_name%2B1%40gmail.com')
    expect(res.status).toEqual(200);
    expect(res.type).toBe('application/json');
    expect(res.body.data).toEqual([{"group_id": "S20213-LOG210-01", "note": "75.1", "student_id": "first_name.last_name+1@gmail.com", "type": "Devoir1", "type_id": "2"}]
    );
    
    res = await request.get('/api/v3/grade/group?group_id=S20213-LOG210-01')
    expect(res.status).toEqual(200);
    expect(res.type).toBe('application/json');
    expect(res.body.data).toEqual(
      [{"group_id": "S20213-LOG210-01", "note": "75.1", "student_id": "first_name.last_name+1@gmail.com", "type": "Devoir1", "type_id": "2"}]
    );
    
    
  }, 10000);
  
});
