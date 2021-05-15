import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { 
    path: 'Home' ,
    component: HomeComponent
  },
  {
    path:'',
    redirectTo: 'Home', pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
