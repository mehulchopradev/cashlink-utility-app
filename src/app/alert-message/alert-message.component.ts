import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  constructor(public alertService: AlertMessageService) { }

  ngOnInit(): void {
  }

}
