import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
// import { CommentComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    // CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }