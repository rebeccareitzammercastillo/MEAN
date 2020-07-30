import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  //seattle route
  {path: 'seattle', component: SeattleComponent},
  //sanjose route
  {path: 'sanjose', component: SanjoseComponent},
  //burbank route
  {path: 'burbank', component: BurbankComponent},
  //dallas route
  {path: 'dallas', component: DallasComponent},
  //dc route
  {path: 'dc', component: DcComponent},
  //chicago route
  {path: 'chicago', component: ChicagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
