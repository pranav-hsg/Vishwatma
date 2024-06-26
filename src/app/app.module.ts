import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImageloaderComponent } from './components/imageloader/imageloader.component';
import { CategoryComponent } from './routes/category/category.component';
import { HomeComponent } from './routes/home/home.component';
import { PostComponent } from './routes/post/post.component';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from './material/material/material.module'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImgloaderDirective } from './components/imageloader/imgloader.directive'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ImageloaderComponent,
    CategoryComponent,
    HomeComponent,
    PostComponent,
    SearchComponent,
    BannerComponent,
    ImgloaderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
