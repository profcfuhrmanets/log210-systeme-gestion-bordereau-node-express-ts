import md5 from 'md5';
import { Teacher } from '../../src/model/Teacher';

describe('TeacherTest', () => {

  it('fail to create teacher by token', () => {
    expect(() => { Teacher.fromToken(md5("invalidemail") as string); }).toThrow('Teacher token not found');
  });

  it('get teacher by Token', () => {
    let teacher = Teacher.fromToken(md5("cc-yvan.ross@etsmtl.ca") as string);
    expect(teacher.id).toBe("cc-yvan.ross@etsmtl.ca");
    expect(teacher.first_name).toBe("Yvan");
  });

  // it('get teacher groups', () => {
  //   let teacher = Teacher.fromId("cc-yvan.ross@etsmtl.ca");
  //   expect(teacher.groups().length).to.equal(4);
  // });

  it('login', () => {
    let teacher = Teacher.login('cc-yvan.ross@etsmtl.ca', 'unknown');
    expect(teacher).toBeTruthy();
    expect(teacher?.token).toEqual('7f1b6b7c407b1292560e61a21e47d645');
    expect(teacher?.user.id).toEqual('cc-yvan.ross@etsmtl.ca');
  })

  it('fail to login', () => {
    let teacher = Teacher.login('teacher+100@gmail.com', 'unknown');
    expect(teacher).toBeNull();
  })

 
});
