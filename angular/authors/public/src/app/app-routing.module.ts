import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';


const routes: Routes = [
  //all authors
  {path:'', component: AllAuthorsComponent},
  //create a new author
  {path: 'new', component: CreateAuthorComponent},
  //edit an author
  {path: 'edit/:id', component: EditAuthorComponent},
  //show an author
  {path: 'show/:id', component: ShowAuthorComponent},
  //add quote 
  {path: 'write/:id', component: AddQuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
