import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageloader',
  templateUrl: './imageloader.component.html',
  styleUrls: ['./imageloader.component.scss']
})
export class ImageloaderComponent implements OnInit {
  @Input() imageLoader: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
