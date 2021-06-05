import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  bannerImageUrl='assets/icons/duck.jpg';
  text='Loading'
  imageLoaderData = [
    {
      imgSrc:'https://picsum.photos/200/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/200/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/200/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/200/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/400/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/300/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/500/300.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/400/200.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/400/800.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/500/500.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/200/100.jpg',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/200/200.jpg',
      imgText:'This is dummy'
    }
  ]
  constructor() { }

  ngOnInit(): void {

    
  }
  ngAfterViewInit(){
    setTimeout(() => {
      
      this.text = 'Loading stopped'
    }, 0);
  }

}
