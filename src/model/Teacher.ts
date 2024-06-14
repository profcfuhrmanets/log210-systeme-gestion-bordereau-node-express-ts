import md5 = require('md5');
import { TeacherJSON } from '.';
import { NotFoundError } from '../errors/NotFoundError';

export class Teacher
{
    static login(email: string, password: string)
    {
        const teachers: TeacherJSON[] = require('../data/teachers.json');
        const teacher = teachers.find(teacher => email == teacher.id);
        return teacher ? { token: md5(email), user: teacher } : null;
    }

    static fromToken(token: string): TeacherJSON
    {
        const teacher = Teacher.all().find(teacher => md5(teacher.id) == token);

        if (!teacher)
        {
            throw new NotFoundError("Teacher token not found");
        }

        return teacher;
    }

    static all()
    {
        let teachers: TeacherJSON[] = require('../data/teachers.json');
        return teachers;
    }
}
