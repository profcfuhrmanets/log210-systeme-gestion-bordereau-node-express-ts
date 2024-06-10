import Multimap = require("multimap");
import { GradeJSON } from ".";

export class Grade {
  private static multimap: Multimap;
  private static instance: Grade;
  
  public static getInstance(): Grade {
    if (!Grade.instance) {
      Grade.instance = new Grade();
      Grade.multimap = new Multimap();
    }
    return Grade.instance;
  }
  
  private constructor() { }
  
  public insert(query:any): string{
  let result = Grade.multimap.set(
    query.student_id, {
      "student_id": query.student_id as string,
      "group_id": query.group_id as string,
      "type": query.type as string,
      "type_id": query.type_id,
      "note": query.note as number
  });
    return query.student_id;

  }
  
  public student(student_id: string): GradeJSON[] {
    return Grade.multimap.get(student_id);
  }
  
  public group(group_id: string): GradeJSON[] {
    const results: any[] = [];
    Grade.multimap.forEach((entry, key) => {
      if (entry.group_id == group_id) {
        results.push(entry);
      }
    })
    return results;
  }
  
  public clear() {
    Grade.multimap = new Multimap();
  }
  
}
