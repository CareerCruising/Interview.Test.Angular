import { Course } from "./Course";

export interface Requirement
{
    Id: number;
    Name: string;
    MinimumMark: number;
    Credits: number;
    Courses: number[];
}
