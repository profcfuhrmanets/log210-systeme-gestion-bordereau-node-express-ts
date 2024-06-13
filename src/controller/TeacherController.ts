import { Teacher } from '../model/Teacher';
import type { TeacherJSON } from '../model';
import { NotFoundError } from '../errors/NotFoundError';

export class TeacherController
{
    public login(email: string, password: string)
    {
        let teacher = Teacher.login(email, password);

        if (teacher !== null)
            return teacher;

        throw new NotFoundError(`The teacher ${email} does not exist. Did you forget to URL encode its email?`);
    }

    public fromToken(token: string)
    {
        return Teacher.fromToken(token);
    }

    public all(): TeacherJSON[]
    {
        return Teacher.all()
    }
}
