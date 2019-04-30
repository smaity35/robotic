import { Component, OnInit } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  latitude = 22.572645;
  longitude = 88.363892;
  zoom = 10;

  latitude1 = 22.595770;
  longitude1 = 88.263641;

  latitude2 = 22.777121;
  longitude2 = 88.637451;
  constructor() { }

  ngOnInit() {

  }

}


