import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  message: object;

  constructor() {
    this.message = null;
  }
}
