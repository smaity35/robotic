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
  constructor() { }

  ngOnInit() {

  }

}


