import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myLogoImg: string = "assets/image/logo_web6.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
