import { Component, HostListener, Input, OnInit } from '@angular/core';
import { bells, notifications, userItems } from './headerr-data';


@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss']
})
export class HeaderrComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  notifications =  notifications;
  bells = bells;
  userItems = userItems;

  constructor() { }

  @HostListener('window:resize',['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
   }

  getHeadClasss(): string { 
    let styleClass= '';
    if(this.collapsed && this.screenWidth >768) {
      styleClass = 'head-trimmed';
     } else { 
      styleClass = 'head-md-screen';
     }
     return styleClass
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void{
    if(innerWidth <845) { 
      this.canShowSearchAsOverlay = true;
    } else { 
      this.canShowSearchAsOverlay = false;
    }

  }
}
