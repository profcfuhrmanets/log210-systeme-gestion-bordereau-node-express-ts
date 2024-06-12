
import { Student } from '../model/Student';
import type { GroupStudentJSON, StudentJSON, validUserJSON } from '../model';

export class StudentController
{
    public login(email: string, password: string): validUserJSON
    {
        let teacher = Student.login(email, password);
        
        if (teacher !== null)
            return teacher;

        throw new Error("Email and password do not match student");
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
