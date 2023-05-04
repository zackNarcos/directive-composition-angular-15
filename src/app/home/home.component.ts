import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { BoxDirective } from '../directives/style-border.directive';
import { StyleColor } from '../directives/style-color.directive';
import { StyleDirevtive } from '../directives/style.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  standalone: true,
  hostDirectives: [
    {
      directive: StyleColor,
      inputs: ['color: color'],
    },
    {
      directive: HighlightDirective,
      outputs: ['highlightEvent: onHighlight'],
    },
    BoxDirective,
  ],
})
export class HomeComponent {
  highlighted = false;

  onHighlight(event) {
    this.highlighted = event;
    console.log(this.highlighted);
  }
}
