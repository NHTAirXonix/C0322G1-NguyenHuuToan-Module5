import {Component, OnInit, ViewChild} from '@angular/core';
import { Customer} from "./customer_module/model/customer.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'case-study';
  constructor() {}

  ngOnInit() {}

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


}
