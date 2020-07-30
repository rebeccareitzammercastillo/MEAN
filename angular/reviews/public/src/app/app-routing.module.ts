import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBusinessesComponent } from './all-businesses/all-businesses.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  //all businesses route
  {path: '', component: AllBusinessesComponent},
  //create a business route
  {path: 'create', component: CreateBusinessComponent},
  //edit a business route
  {path: 'edit/:id', component: EditBusinessComponent},
  //all reviews route
  {path: 'reviews/:id', component: ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
