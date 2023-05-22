import { Component } from '@angular/core';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  fontColor: string = 'pink';
  isClicked: boolean = false;
  courses1: string = 'BCS230';
  courses2: string = 'BCS370';
  courses3: string = 'CSC211';
  courses4: string = 'MTH230';
  courses5: string = 'EGL250W';

  sayMessage = () => {
    alert('test click');
  };
}
