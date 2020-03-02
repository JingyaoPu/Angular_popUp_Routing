import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor() { 
    console.log("WelcomeComponent on construction")
  }

  ngOnInit(): void {

  }
  @Output()
  closed = new EventEmitter();
}
