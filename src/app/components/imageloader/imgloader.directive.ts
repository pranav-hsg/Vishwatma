import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[imageLoader]'
})
export class ImgloaderDirective {
  // @Input('src') imageSrc:any;
  // @Input('loaderImg') loaderImg:any;
  @HostListener('load')loadImage()  {
    // console.log(this.srcAttr)
    // this.srcAttr=this.imageSrc;
    // console.log(this.imageSrc)
    this.isLoading = false;
  }
  // @HostBinding('attr.src') srcAttr="assets/icons/img_holder.svg"
  @HostBinding('class.loading') isLoading = true;
  constructor() { }

}
