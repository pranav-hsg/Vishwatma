import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("bgDark") bgEl: ElementRef;
  constructor() { }
  collapsed: boolean = false;
  showMenu = false;
  ngOnInit(): void {
  }
  toggleMenu( ){
    this.showMenu = !this.showMenu
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if(this.bgEl.nativeElement.contains(e.target)){
      this.showMenu = !this.showMenu
    }
  }
}
