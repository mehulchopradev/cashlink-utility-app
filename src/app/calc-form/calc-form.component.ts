import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss']
})
export class CalcFormComponent implements OnInit {

  firstNo: string;

  secondNo: string;

  ans: string;

  operation: string;

  @Output()
  calculated: EventEmitter<object>;

  constructor() {
    this.firstNo = '10';
    this.secondNo = '20';
    this.ans = '30';
    this.operation = '+';

    this.calculated = new EventEmitter<object>();
  }

  onCalculate() {
    const { firstNo, secondNo, operation } = this;

    const iFirstNo = parseInt(firstNo);
    const iSecondNo = parseInt(secondNo);

    let iAns: number;
    if (operation == '+') {
      iAns = iFirstNo + iSecondNo;
    } else if (operation == '-') {
      iAns = iFirstNo - iSecondNo;
    } else {
      iAns = iFirstNo * iSecondNo;
    }

    this.ans = iAns + "";

    this.calculated.emit({
      first: firstNo,
      second: secondNo,
      ops: operation,
      ans: iAns + "",
    });
  }

  ngOnInit(): void {
  }

}
