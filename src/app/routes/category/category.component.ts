import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  bannerImageUrl = 'assets/icons/duck.jpg';
  text = 'Loading';
  imageLoaderData = [
    {
      imgSrc: 'https://picsum.photos/400/300.jpg',
      imgText: 'A tranquil morning scene',
    },
    {
      imgSrc: 'https://picsum.photos/360/300.jpg',
      imgText: 'Captivating natural beauty',
    },
    {
      imgSrc: 'https://picsum.photos/200/380.jpg',
      imgText: 'Serene wilderness landscape',
    },
    {
      imgSrc: 'https://picsum.photos/1800/300.jpg',
      imgText: 'Majestic mountainscape',
    },
    {
      imgSrc: 'https://picsum.photos/400/300.jpg',
      imgText: 'Spectacular sunset view',
    },
    {
      imgSrc: 'https://picsum.photos/300/300.jpg',
      imgText: 'Idyllic countryside charm',
    },
    {
      imgSrc: 'https://picsum.photos/500/300.jpg',
      imgText: 'Enchanting forest retreat',
    },
    {
      imgSrc: 'https://picsum.photos/400/200.jpg',
      imgText: 'Breathtaking coastal vista',
    },
    {
      imgSrc: 'https://picsum.photos/400/800.jpg',
      imgText: 'Tranquil waterside scene',
    },
    {
      imgSrc: 'https://picsum.photos/500/500.jpg',
      imgText: 'Awe-inspiring natural wonder',
    },
    {
      imgSrc: 'https://picsum.photos/200/100.jpg',
      imgText: 'Lush greenery in the morning light',
    },
    {
      imgSrc: 'https://picsum.photos/200/200.jpg',
      imgText: 'Whimsical forest canopy',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.text = 'Loading stopped';
    }, 0);
  }
}
