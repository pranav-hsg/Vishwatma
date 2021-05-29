import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerImageUrl:string='https://static.canva.com/marketplace/banners/Temp-MP-Banner_OCT19_Logo-Green_V1-%40x2.jpg';
  constructor() { }
  
  ngOnInit(): void {
    // debugger;
  }

}
