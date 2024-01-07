import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  goTo() {
    location.href= "http://localhost:4200/cart#cartBox";
  }
}
