import { Diploma } from './Diploma';
import { Requirement } from './Requirement';
import { Student } from './Student';

export class Repository {

  GetStudent(id: number): Student | null
  {
      var students = this.GetStudents();
      var student: Student | null = null;

      for (let i = 0; i < students.length; i++)
      {
          if (id == students[i].Id)
          {
              student = students[i];
          }
      }
      return student;
  }

  GetDiploma(id: number): Diploma | null
  {
      var diplomas = this.GetDiplomas();
      var diploma: Diploma | null = null;

      for (let i = 0; i < diplomas.length; i++)
      {
          if (id == diplomas[i].Id)
          {
              diploma = diplomas[i];
          }
      }
      return diploma;

  }

  GetRequirement(id: number): Requirement | null
  {
      var requirements = this.GetRequirements();
      var requirement: Requirement | null = null;

      for (let i = 0; i < requirements.length; i++)
      {
          if (id == requirements[i].Id)
          {
              requirement = requirements[i];
          }
      }
      return requirement;
  }


  private GetDiplomas(): Diploma[]
  {
      return [
        {
          Id: 1,
          Credits: 4,
          Requirements: [100,102,103,104]
        }
      ];
  }

  GetRequirements(): Requirement[]
  {
    return [
      { Id: 100, Name: "Math", MinimumMark: 50, Courses: [1], Credits: 1 },
      { Id: 102, Name: "Science", MinimumMark: 50, Courses: [2], Credits: 1 },
      { Id: 103, Name: "Literature", MinimumMark :50, Courses: [3], Credits: 1},
      { Id: 104, Name: "Physical Education", MinimumMark: 50, Courses: [4], Credits: 1 }
    ];
  }

  GetStudents(): Student[]
  {
    return [
      new Student(1, [
        { Id: 1, Name: "Math", Mark: 95 },
        { Id: 2, Name: "Science", Mark: 95 },
        { Id: 3, Name: "Literature", Mark: 95 },
        { Id: 4, Name: "Physical Education", Mark: 95 }
      ]),
      new Student(2, [
        {Id: 1, Name: "Math", Mark: 80 },
        {Id: 2, Name: "Science", Mark: 80 },
        {Id: 3, Name: "Literature", Mark: 80 },
        {Id: 4, Name: "Physical Education", Mark: 80 }
      ]),
      new Student(3, [
        {Id: 1, Name: "Math", Mark: 50 },
        {Id: 2, Name: "Science", Mark: 50 },
        {Id: 3, Name: "Literature", Mark: 50 },
        {Id: 4, Name: "Physical Education", Mark: 50 }
      ]),
      new Student(4, [
        {Id: 1, Name: "Math", Mark: 40 },
        {Id: 2, Name: "Science", Mark: 40 },
        {Id: 3, Name: "Literature", Mark: 40 },
        {Id: 4, Name: "Physical Education", Mark: 40 }
      ])
    ];
  }
}
