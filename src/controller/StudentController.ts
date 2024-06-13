
import { Student } from '../model/Student';
import type { GroupStudentJSON, StudentJSON, validUserJSON } from '../model';
import { NotFoundError } from '../errors/NotFoundError';

export class StudentController
{
    public login(email: string, password: string): validUserJSON
    {
        let student = Student.login(email, password);
        
        if (student !== null)
            return student;

        throw new NotFoundError(`The student ${email} does not exist. Did you forget to URL encode its email?`);
    }

    public fromToken(token: string): StudentJSON
    {
        return Student.fromToken(token);
    }

    public all(): StudentJSON[]
    {
        return Student.all();
    }

    public groupStudent(): GroupStudentJSON[]
    {
        return Student.groupStudent();
    }
}
