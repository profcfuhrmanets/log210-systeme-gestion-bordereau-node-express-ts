
import type { ScheduleJSON } from "../model";
import { Schedule } from '../model/Schedule';

export class ScheduleController
{
    public all(): ScheduleJSON[]
    {
        return Schedule.all();
    }
}
