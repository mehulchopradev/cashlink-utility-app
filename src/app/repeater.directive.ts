import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
  }

  @Input()
  set appRepeater(times: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
