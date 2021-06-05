import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private httpClient:HttpClient) { }

  getSliderContent(){
  }

  loadData(route: string, startFrom: string, limit: string) {
    const url = `http://34.67.33.183/home/${route}/${startFrom}/${limit}`;
    return this.httpClient.get(url);
  }
}
