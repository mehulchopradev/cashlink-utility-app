import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  message: object;

  constructor() {
    this.message = null;
  }

  showError(description: string): void {
    this.message = {
      description, // description: description
      messageType: 'error'
    }
  }

  showSuccess(description: string): void {
    this.message = {
      description,
      messageType: 'success'
    }
  }

  clearMessage() {
    this.message = null;
  }
}
