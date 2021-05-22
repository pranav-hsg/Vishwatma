import { ElementRef, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDataService } from './post-data.service';
// import {ScrollOut} from 'scroll-out'
declare var ScrollOut: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data = {};
  id:any;

  post:any;
  sco: any;
  number = 1;
  constructor(private el: ElementRef,private readonly zone: NgZone,private postService:PostDataService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
            this.id = params.get('id');
            this.id = +this.id;
        }
    )
    if(this.id){
      this.postService.getPostData(this.id).subscribe(
        response => {
          // if(response?.errMessage){
          //   console.log(response)
          // }
          this.post =response
          this.initScrollout();
        },
        err => console.log('HTTP Error', err),
      )
    }
  }
  initScrollout(){
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        this.sco = ScrollOut({
          scope: this.el.nativeElement,
          targets: ".scrollout,.post",
          threshold:0.00000001
        });       
      });
    }, 2000);
  } 
  ngOnDestroy() {
    this.sco.teardown();
  }
}
