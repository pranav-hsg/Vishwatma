import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("bgDark") bgEl: ElementRef | undefined;
  constructor() { }
  collapsed: boolean = false;
  showMenu = false;
  menus =  [
    {
      'heading':'Home',
      'submenu':[
        {
          'name':'Submenu1 fsadf jkashfksdhfhjdk',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu2',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Subm',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu2',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Subm',
          'onClick':'Submenu1 action'
        }
      ]
    },
    {
      'heading':'Template',
      'submenu':[
        {
          'name':'Submenu1',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu2',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu3',
          'onClick':'Function'
        }
      ]
    },
    {
      'heading':'Features',
      'submenu':[
        {
          'name':'Submenu1',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu2',
          'onClick':'Submenu1 action'
        },
        {
          'name':'Submenu3',
          'onClick':'Function'
        }
      ]
    }
   
  ]
  ngOnInit(): void {
  }
  toggleMenu( ){
    this.showMenu = !this.showMenu
  }
  toggleDropdown(e:any){
    console.log( e.target.parentNode.classList, e.target.parentNode, e.target)
    e.target.parentNode.classList.toggle('open');
    e.target.parentNode.parentNode.classList.toggle('open')
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if(this.bgEl && this.bgEl.nativeElement.contains(e.target)){
      this.showMenu = !this.showMenu
    }
  }
}
