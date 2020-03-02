import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home';
import { WelcomeComponent } from './Welcome/welcome.component';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
