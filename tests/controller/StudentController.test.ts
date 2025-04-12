import { describe, expect, it } from 'vitest';
import { StudentController } from '../../src/controller/StudentController';
import { NotFoundError } from '../../src/errors/NotFoundError';
import type { GroupStudentJSON } from '../../src/model';

describe('StudentControllerTest', () =>
{
    it('must login', () =>
    {
        let controller: StudentController = new StudentController();
        let teacher = controller.login("first_name.last_name+1@gmail.com", "unknown");
        expect(teacher.token).toEqual('e649905a37aa58c397647862118e3474');
        expect(teacher.user.id).toEqual("first_name.last_name+1@gmail.com");
    });

    it('must fail to login', () =>
    {
        let controller: StudentController = new StudentController();
        expect(() => { controller.login("teacher+100@gmail.com", "unknown"); }).toThrow(NotFoundError)
    });

    it('get all students', () =>
    {
        let controller: StudentController = new StudentController();
        expect(controller.all().length).toEqual(100)
    });

    it('must get groupstudent', () =>
    {
        let controller: StudentController = new StudentController();
        let groupStudent: GroupStudentJSON[] = controller.groupStudent();
        expect(groupStudent.length).toEqual(100);
        expect(groupStudent[0]).toEqual({ "group_id": "S20213-LOG121-01", "student_id": "first_name.last_name+1@gmail.com" })
    });
});
