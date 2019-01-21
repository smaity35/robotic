import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.header').addClass('header-scrolled');
      } else {
        $('.header').removeClass('header-scrolled');
      }
    });
    $(document).ready(function(){
      "use strict";
      $('.play-btn').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      });
      
    });

  }

}
