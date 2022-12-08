import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    if (environment.production) {
      this.logger.turnOff();
    }
  }
  title = 'services';
}
