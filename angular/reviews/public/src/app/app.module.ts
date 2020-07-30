import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AllBusinessesComponent } from './all-businesses/all-businesses.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreateReviewComponent } from './create-review/create-review.component'

@NgModule({
  declarations: [
    AppComponent,
    AllBusinessesComponent,
    CreateBusinessComponent,
    EditBusinessComponent,
    ReviewsComponent,
    CreateReviewComponent
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
