import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorNewRoutingModule } from './calculator-new-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { CommonUtilitiesModule } from '../common-utilities/common-utilities.module';


@NgModule({
  declarations: [CalcFormComponent, CalcResultsComponent, CalculatorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    CalculatorNewRoutingModule,
    CommonUtilitiesModule,
  ]
})
export class CalculatorNewModule { }
