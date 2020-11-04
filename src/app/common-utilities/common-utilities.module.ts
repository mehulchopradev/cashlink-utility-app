import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { LogitDirective } from './logit.directive';



@NgModule({
  declarations: [HighlightDirective, LogitDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    LogitDirective,
  ]
})
export class CommonUtilitiesModule { }
