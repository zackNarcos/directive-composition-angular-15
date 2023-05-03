import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyleColor]',
  standalone: true,
})
export class StyleColor implements OnInit {
  @Input() color = 'red';
  element = inject(ElementRef);
  renderer2 = inject(Renderer2);

  ngOnInit() {
    this.renderer2.setStyle(this.element.nativeElement, 'color', this.color);
  }
}
