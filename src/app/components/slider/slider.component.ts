import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Output() loadMore = new EventEmitter<string>();
  @Input() sliderData = [];
  @Input() imageLoader: any = {};
  numberOfRightSwipes = 0
  completeSliderData = []
  appearingSlider = []
  requestedForData = false
  stopLoading = false
  scrollPos = 1

  ngOnInit() {

  }
/**
 * TODO: Pranav - clean up the code.
 */
  ngOnChanges() {
    console.log('changed', this.sliderData)

    if (this.sliderData && this.sliderData.length == 0) { 
      this.stopLoading = true;
      this.numberOfRightSwipes = 0
     } else {
      this.stopLoading = false
    }
    this.completeSliderData = this.completeSliderData.concat(this.sliderData || [])
    const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1)
    if (window.innerWidth > 600) {
      this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5)
    } else {
      this.appearingSlider = this.completeSliderData
    }
    this.requestedForData = false
  }

  loadNext() {
    this.numberOfRightSwipes++
    const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1)
    if ((this.completeSliderData.length - startingFrom) < 5) {
      this.appearingSlider = []
      this.loadMore.emit()
    } else {
      setTimeout(() => {
        this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5)
  
      }, 100)
    }
  }

  loadPrev() {
    if (this.numberOfRightSwipes <= 1) {
      return
    }
    this.numberOfRightSwipes--

    const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1)
    setTimeout(() => {
      this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5)

    }, 100)

  }

  swipping(e: any): any {
    if (this.stopLoading) {
      return false
    }
    if (this.requestedForData) {
      return false
    }
    if (((e.target.scrollWidth - e.target.scrollLeft) < window.innerWidth + 50)) {
      this.requestedForData = true
      this.numberOfRightSwipes++
      this.loadMore.emit()

    }
  }

}
