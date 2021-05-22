import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PostComponent } from './routes/post/post.component';

const routes: Routes = [
  { 
    path: 'home' ,
    component: HomeComponent
  },
  { 
    path: 'post/:id' ,
    component: PostComponent
  },
  {
    path:'',
    redirectTo: 'home', pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
