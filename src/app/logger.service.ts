import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  isOn: boolean = true;

  constructor() {

  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  log(message: string) {
    if (this.isOn) {
      console.log(message);
    }
  }

}
