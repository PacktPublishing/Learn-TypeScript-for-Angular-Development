import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  headerTitle = 'header title';
  disabledBtn = true;

  constructor() {
    console.log('constructor call');
  }

  ngOnInit() {
    console.log(this.headerTitle);
  }

  ngDoCheck() {
    console.log('check');
  }
}
