import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogit]'
})
export class LogitDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  onClick() {
    console.log('Element clicked is :')
    console.log(this.elementRef.nativeElement);
    console.log(new Date());

    // in the future, we could send the above analytics information to a backend server
  }

}
