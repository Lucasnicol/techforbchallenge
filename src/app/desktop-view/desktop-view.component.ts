import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss']
})
export class DesktopViewComponent implements OnInit {
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
