import { Component, OnInit } from '@angular/core';

import {SliderService} from './../../services/slider/slider.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latestArticles:any
  authors = []
  ankanas = []

  bannerImageUrl:string='https://static.canva.com/marketplace/banners/Temp-MP-Banner_OCT19_Logo-Green_V1-%40x2.jpg';
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.loadData('posts', '-1', '10').subscribe((data=[]) => {
      console.log(data)
      this.latestArticles = data
    })
    
    // this.homeData = this.sliderService.getSliderContent()
  }
  

  loadMoreLatestArticles(){
    const lastId = this.latestArticles[this.latestArticles.length - 1].redirection
    this.sliderService.loadData('posts', lastId, '10').subscribe((data=[]) => {
      console.log(data)
      this.latestArticles = data
    })
  }

}
