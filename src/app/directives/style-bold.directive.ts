import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleBold]',
  standalone: true,
})
export class StyleBold implements OnInit {
  @Input() weight = 'bold';

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-size',
      this.weight
    );
  }
}
