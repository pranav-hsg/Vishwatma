import { Component, OnInit } from '@angular/core';

import {SliderService} from './../../services/slider/slider.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData: any = {}
  authors = []
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    
    this.sliderService.getSliderContent().subscribe(data =>{
      this.homeData = data
      this.authors = this.homeData.posts
    })
  }

  loadMore(){
    debugger
    this.authors = [...this.authors]
  }

}
