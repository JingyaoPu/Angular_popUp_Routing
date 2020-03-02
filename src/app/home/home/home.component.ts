import { Component, OnInit, Injector } from '@angular/core';
import { PopupService } from '../popup.service';
import { WelcomeComponent } from '../Welcome/welcome.component'
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRandomColor:string;
  randomColors:string[] = [
    "red",
    "blue",
    "yellow",
    "black",
    "green"
  ]
  constructor(injector: Injector, public popupWelcome: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(WelcomeComponent, {injector});
    // Register the custom element with the browser.
    try {
      customElements.define('welcome-element', PopupElement);
    } catch (error) {}
    
  }

  ngOnInit(): void {
    let colorIndex = 0;
    let colorNumber = this.randomColors.length;
    setInterval(()=>{
      console.log(this.currentRandomColor)
      this.currentRandomColor = this.randomColors[colorIndex];
      colorIndex = (colorIndex+1)%colorNumber
    },500)
  }

  welcome(){

  }

}
