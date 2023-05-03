import { Component, Input, OnInit } from '@angular/core';
import { StyleBold } from '../directives/style-bold.directive';
import { BoxDirective } from '../directives/style-border.directive';
import { StyleColor } from '../directives/style-color.directive';
import { StyleDirevtive } from '../directives/style.directive';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true,
  hostDirectives: [
    {
      directive: StyleColor,
      inputs: ['color: myColor'],
    },
    {
      directive: StyleBold,
      inputs: ['weight: mySize'],
    },
    BoxDirective,
  ],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit() {}
}
