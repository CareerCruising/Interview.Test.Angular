import { Course } from "./Course";
import { STANDING } from "./STANDING";

export class Student
{
    Id: number;
    Courses: Course[];
    Standing: STANDING;

    constructor(id: number, courses: Course[]) {
      this.Id = id;
      this.Courses = courses;
      this.Standing = STANDING.None
    }
}
