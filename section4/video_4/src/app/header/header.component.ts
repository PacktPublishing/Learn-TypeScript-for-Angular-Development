import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerTitle = 'header title';
  disabledBtn = true;

  constructor() {
    console.log('constructor call');
  }

  clickHandler(event) {
    console.log(event);
  }
}
