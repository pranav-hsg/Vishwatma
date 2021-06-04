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
      imgSrc:'https://picsum.photos/240',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/241',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/242',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/243',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/244',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/245',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/246',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/247',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/248',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/249',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/239',
      imgText:'This is dummy'
    },
    {
      imgSrc:'https://picsum.photos/238',
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
