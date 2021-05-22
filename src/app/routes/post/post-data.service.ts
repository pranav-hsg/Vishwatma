import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  
    
    
  constructor(private http: HttpClient) { }
  getPostData(id:number){
    return this.http.get(`http://34.67.33.183/post/${id}`);
  }
}
