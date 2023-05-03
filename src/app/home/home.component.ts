import { Component } from '@angular/core';
import { BoxDirective } from '../directives/style-border.directive';
import { StyleColor } from '../directives/style-color.directive';
import { StyleDirevtive } from '../directives/style.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  hostDirectives: [
    {
      directive: StyleColor,
      inputs: ['color: color'],
    },
    BoxDirective,
  ],
})
export class HomeComponent {}
