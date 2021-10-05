import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { Diploma } from './Diploma';
import { STANDING } from './STANDING';
import { Student } from './Student';

const diploma: Diploma = {
  Id: 1,
  Credits: 4,
  Requirements: [ 100, 102, 103, 104 ]
};

const students: Student[] = [
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
    {Id: 4, Name: "Physichal Education", Mark: 80 }
  ]),
  new Student(3, [
    {Id: 1, Name: "Math", Mark: 50 },
    {Id: 2, Name: "Science", Mark: 50 },
    {Id: 3, Name: "Literature", Mark: 50 },
    {Id: 4, Name: "Physichal Education", Mark: 50 }
  ]),
  new Student(4, [
    {Id: 1, Name: "Math", Mark: 40 },
    {Id: 2, Name: "Science", Mark: 40 },
    {Id: 3, Name: "Literature", Mark: 40 },
    {Id: 4, Name: "Physichal Education", Mark: 40 }
  ])
];

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GraduationTracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GraduationTracker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('GraduationTracker app is running!');
  });

  it('should have credits', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    var graduated: [boolean, STANDING][] = [];

    students.forEach(student => {
      graduated.push(app.hasGraduated(diploma, student));
    });

    expect(graduated[graduated.length -1]).toBeTruthy();
  });
});
