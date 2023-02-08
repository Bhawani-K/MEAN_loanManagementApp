import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  collapsed = true;
  navData = [
    {
      routerLink: 'dashboard',
      icon: 'home',
      label: 'DashBoard'
    }
  ]
  closeNav(){
    this.collapsed = false
  }
  openNav(){
    this.collapsed = true
  }
}
