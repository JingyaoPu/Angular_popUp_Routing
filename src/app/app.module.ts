import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PostsModule} from './posts/posts.module'
import {HomeModule} from './home/home.module'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
