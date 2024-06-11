import { Course } from '../model/Course';

import type { CourseJSON } from "../model";

export class CourseController
{
    public all(): CourseJSON[]
    {
        return Course.all();
    }
}
