import { Directive, Output, ElementRef, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetEl) {
    const clickedInside =
      this.el.nativeElement.contains(targetEl);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

  constructor(private el: ElementRef) { }
}
