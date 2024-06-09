import fs from 'fs';
import path from 'path';
import type { ScheduleJSON } from ".";

export class Schedule {
  static all(): ScheduleJSON[] {
    const jsonFilePath = path.resolve(__dirname, '../data/Schedule.json');
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    const schedules: ScheduleJSON[] = JSON.parse(data);
    return schedules;
  }

  static groups(): string[]{
    const uniqueGroup =  [... new Set(Schedule.all().map(item => item.group_id))];
    return uniqueGroup;
  }
 
}
 