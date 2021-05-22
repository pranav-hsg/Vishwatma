import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private httpClient:HttpClient) { }

  getSliderContent(){
    const url = 'http://34.67.33.183/home';
    return this.httpClient.get(url);
  }

  getNextSlide(lastObj:any){
    const url = 'http://34.67.33.183/home/posts/'+lastObj.redirection+'/7';
    return this.httpClient.get(url);
  }
}
