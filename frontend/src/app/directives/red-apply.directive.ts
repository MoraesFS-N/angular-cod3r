import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedApply]'
})
export class RedApplyDirective {

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.color = "#4c96c3"
  }



}
