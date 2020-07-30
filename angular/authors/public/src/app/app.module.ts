import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpService} from './http.service'
import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
    AllAuthorsComponent,
    ShowAuthorComponent,
    AddQuoteComponent
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
