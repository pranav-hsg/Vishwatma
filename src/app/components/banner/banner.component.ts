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
  debounce(func: Function, wait : number) {
    let timeout: any;
    return function(...aargs: any) {
     /*    console.log(args,args2 */
      let later = function() {
        timeout = null;
        func.apply(this,aargs);
      };
      var callNow = !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(this, aargs);
    };
  };
  search(e){
      console.log("Indeed",e)
      console.log('skipped')
  }
  onKeyPress(e:any){
     let search = this.debounce(this.search,2000); 
    //  search(e)
  }
  
}
