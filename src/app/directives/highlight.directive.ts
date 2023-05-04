import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Output() highlightEvent = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
    this.highlightEvent.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
    this.highlightEvent.emit(false);
  }

  private highlight(flag: boolean) {
    if (flag) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = null;
    }
  }
}
