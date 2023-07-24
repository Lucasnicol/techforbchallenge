import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }


  ngOnInit(): void { }

  getHeadClass(): string { 
    let styleClass= '';
    if(this.collapsed && this.screenWidth >768) {
      styleClass = 'head-trimmed';
     } else { 
      styleClass = 'head-md-screen';
     }
     return styleClass
  }
}
