import { Component } from '@angular/core';

import { Diploma } from './Diploma';
import { Repository } from './repository';
import { STANDING } from './STANDING';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private repository: Repository;

  title = 'GraduationTracker';

  diploma: Diploma;
  students: Student[];

  constructor() {
    this.repository = new Repository();

    this.diploma = this.repository.GetDiploma(1) || { Id: 0, Credits: 0, Requirements: [] };
    this.students = this.repository.GetStudents();
  }

  hasGraduated(diploma: Diploma, student: Student): [boolean, number]
  {
      var credits = 0;
      var average = 0;

      for(let i = 0; i < diploma.Requirements.length; i++)
      {
          for(let j = 0; j < student.Courses.length; j++)
          {
              var requirement = this.repository.GetRequirement(diploma.Requirements[i]);

              if (requirement) {
                for (let k = 0; k < requirement.Courses.length; k++)
                {
                    if (requirement.Courses[k] == student.Courses[j].Id)
                    {
                        average += student.Courses[j].Mark;
                        if (student.Courses[j].Mark > requirement.MinimumMark)
                        {
                            credits += requirement.Credits;
                        }
                    }
                }
              }

          }
      }

      average = average / student.Courses.length;

      var standing = STANDING.None;

      if (average < 50)
          standing = STANDING.Remedial;
      else if (average < 80)
          standing = STANDING.Average;
      else if (average < 95)
          standing = STANDING.MagnaCumLaude;
      else
          standing = STANDING.SumaCumLaude;

      switch (standing)
      {
          case STANDING.Remedial:
              return [false, standing];
          case STANDING.Average:
              return [true, standing];
          case STANDING.SumaCumLaude:
              return [true, standing];
          case STANDING.MagnaCumLaude:
              return [true, standing];

          default:
              return [false, standing];
      }
  }
}
