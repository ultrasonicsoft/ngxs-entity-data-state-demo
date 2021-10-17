import { Component } from '@angular/core';
import { CountState } from './states/count.state';
import { CoursesEntitiesState } from './states/course.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-entity-state-demo';

  constructor(public counter: CountState,
    private courses: CoursesEntitiesState) { }

  public ngOnInit(): void {
    const courses = [
      {
        id: 0,
        description: 'Angular NGXS Course',
        category: 'BEGINNER',
        seqNo: 1
      },
      {
        id: 1,
        description: 'Angular for Beginners',
        category: 'BEGINNER',
        seqNo: 2
      },
      {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        category: 'ADVANCED',
        seqNo: 3
      }
    ];
    this.courses.setAll(courses);
    console.log(this.courses.selectAll());

  }

}
