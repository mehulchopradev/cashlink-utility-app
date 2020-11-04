import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punishment',
  templateUrl: './punishment.component.html',
  styleUrls: ['./punishment.component.scss']
})
export class PunishmentComponent implements OnInit {

  punishment: string;

  noOfTimes: number;

  constructor() {
    this.punishment = null;
    this.noOfTimes = null;
  }

  ngOnInit(): void {
  }

}
