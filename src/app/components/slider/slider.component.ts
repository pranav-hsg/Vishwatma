import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) slickModal: any
  slides = [{title:'', img:''}];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5, "centerPadding": 40};
  lastgetSliderLength:any;
  isLoading:boolean = false;

  next() {
    this.isLoading = true;
    const lastObj = this.slides[this.slides.length -1]
    this.slickModal.slickNext();
    if(this.lastgetSliderLength !== 0){
      this.sliderService.getNextSlide(lastObj).subscribe((getNextSlideData:any) => {
        this.lastgetSliderLength = getNextSlideData.length;
        if(getNextSlideData.length > 0) {
          getNextSlideData.forEach((element:any) => {
            this.slides.push(element)
          });
        }
        this.isLoading = false;
      }, error => {
         this.isLoading = false;
      });
    }
    
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
  constructor(private sliderService:SliderService) { 
    this.sliderService.getSliderContent().subscribe((sliderData:any)=>{
       console.log(sliderData)
       this.slides = sliderData.posts;
    }, error=>{
       console.log(error);
    })
    console.log('window', window);
    if(window.outerWidth < 420){
      this.slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "centerPadding": 40};
    }
  }

  ngOnInit(): void {
  }

  open() {
    console.log('open')
  }

}
