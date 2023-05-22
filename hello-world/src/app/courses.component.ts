import { Component } from '@angular/core';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  fontColor = 'pink';
  isClicked = false;
  courses1 = 'BCS230';
  courses2 = 'BCS370';
  courses3 = 'CSC211';
  courses4 = 'MTH230';
  courses5 = 'EGL250W';

  sayMessage = () => {
    alert('test click');
  };
}
