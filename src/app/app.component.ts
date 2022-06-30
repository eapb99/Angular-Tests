import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum(a: number, b: number) {
    return a +b ;
  }
  title = 'UnitTest';
  active = true;
}
