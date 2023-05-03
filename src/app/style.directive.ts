import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Output,
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
      'font-weight',
      this.weight
    );
  }
}

@Directive({
  selector: 'appBox',
  standalone: true,
})
export class BoxDirective implements OnInit {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  color = 'green';

  ngOnInit(): void {
    this.renderer.setStyle(this.hostEl, 'display', 'block');
    console.log(this.color);

    this.renderer.setStyle(this.hostEl, 'border', `2px solid ${this.color}`);
    this.renderer.setStyle(this.hostEl, 'padding', '8px');
    this.renderer.setStyle(this.hostEl, 'border-radius', '5px');
  }
}

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [StyleColor, StyleBold, BoxDirective],
})
export class StyleDirevtive {}
