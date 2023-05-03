import { Directive } from '@angular/core';
import { StyleBold } from './style-bold.directive';
import { BoxDirective } from './style-border.directive';
import { StyleColor } from './style-color.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [StyleColor, StyleBold, BoxDirective],
})
export class StyleDirevtive {}
