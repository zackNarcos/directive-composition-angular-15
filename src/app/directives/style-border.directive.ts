import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'appBox',
  standalone: true,
})
export class BoxDirective implements OnInit {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  @Output() borderEmitter = new EventEmitter();

  onClick() {
    this.borderEmitter.emit(true);
  }

  color = 'green';

  ngOnInit(): void {
    this.renderer.setStyle(this.hostEl, 'display', 'block');
    console.log(this.color);

    this.renderer.setStyle(this.hostEl, 'border', `2px solid ${this.color}`);
    this.renderer.setStyle(this.hostEl, 'padding', '8px');
    this.renderer.setStyle(this.hostEl, 'border-radius', '5px');
  }
}
