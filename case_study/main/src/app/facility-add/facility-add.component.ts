import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // VILLA

  displayStyle1 = "none";

  openPopupV() {
    this.displayStyle1 = "block";
  }
  closePopupV() {
    this.displayStyle1 = "none";
  }

  // HOUSE

  displayStyle2 = "none";

  openPopupH() {
    this.displayStyle2 = "block";
  }
  closePopupH() {
    this.displayStyle2 = "none";
  }

  // ROOM

  displayStyle3 = "none";

  openPopupR() {
    this.displayStyle3 = "block";
  }
  closePopupR() {
    this.displayStyle3 = "none";
  }
}
