
import type { SemesterJSON } from "../model";
import { Semester } from '../model/Semester';

export class SemesterController
{
    public all(): SemesterJSON[]
    {
        return Semester.all();
    }
}
