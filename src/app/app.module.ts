import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImageloaderComponent } from './components/imageloader/imageloader.component';
import { CategoryComponent } from './routes/category/category.component';
import { HomeComponent } from './routes/home/home.component';
import { PostComponent } from './routes/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ImageloaderComponent,
    CategoryComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
