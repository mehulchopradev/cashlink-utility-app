import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstNo: string;

  secondNo: string;

  ans: string;

  operation: string;

  constructor() {
    this.firstNo = '10';
    this.secondNo = '20';
    this.ans = '30';
    this.operation = '+';
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
  }

  onFirstNoChanged(firstNo: string) {
    this.firstNo = firstNo;
  }

  onSecondNoChanged(secondNo: string) {
    this.secondNo = secondNo;
  }

  onOperationChanged(operation: string) {
    this.operation = operation;
  }
}
