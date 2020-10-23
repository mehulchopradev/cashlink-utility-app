import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  firstNo: string;

  secondNo: string;

  operation: string;

  ans: string;

  onCalculated(data) {
    const { first, second, ops, ans } = data;
    this.firstNo = first;
    this.secondNo = second;
    this.operation = ops;
    this.ans = ans;
  }

  ngOnInit(): void {
  }

}
