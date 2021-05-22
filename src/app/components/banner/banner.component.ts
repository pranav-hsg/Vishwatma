import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  // debounce(cb, interval, immediate) {
  //   var timeout;
  
  //   return function() {
  //     var context = this, args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) cb.apply(context, args);
  //     };          
  
  //     var callNow = immediate && !timeout;
  
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, interval);
  
  //     if (callNow) cb.apply(context, args);
  //   };
  // };
  // search(e){
  //     console.log("Indeed",e)
  //     console.log('skipped')
  // }
  // onKeyPress(e:any){
  //    this.debounce(this.search,2000); 
  //   //  search(e)
  // }
  
}
