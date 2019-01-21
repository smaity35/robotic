
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };
     if(document.getElementById("service-select")){
          $('select').niceSelect();
    };    

    $('.img-gal').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


   

    
  //  Counter Js 

  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('.header').length) {
          top_space = $('.header').outerHeight();

          if( ! $('.header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top-108

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });
  

  

    
    // $('.active-realated-carusel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100,
    //     dots: true,
    //     nav:true,
    //     navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],                
    //     autoplay:true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //         }
    //     }
    // });


    // $('.active-about-carusel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100,
    //     nav:true,
    //     navText: ["<span class='lnr lnr-arrow-up'></span>",
    //     "<span class='lnr lnr-arrow-down'></span>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //         }
    //     }
    // });


    // $('.active-review-carusel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     autoplay:true,
    //     margin:30,
    //     dots: true
    // });

    // $('.active-info-carusel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100, 
    //     dots: true,    
    //     autoplay:true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //         }
    //     }
    // });


    // $('.active-testimonial').owlCarousel({
    //     items:2,
    //     loop:true,
    //     margin: 30,
    //     dots: true,
    //     autoplay:true,
    //     nav:true,
    //     navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],        
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //         }
    //     }
    // });


    //     $('.active-testimonials-slider').owlCarousel({
    //     items:3,
    //     loop:true,
    //     margin: 30,
    //     dots: true,
    //     autoplay:true,    
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         801: {
    //             items: 3,
    //         }            
    //     }
    // });


    // $('.active-fixed-slider').owlCarousel({
    //     items:3,
    //     loop:true,
    //     dots: true,
    //     nav:true,
    //     navText: ["<span class='lnr lnr-arrow-up'></span>",
    //     "<span class='lnr lnr-arrow-down'></span>"],        
    //         responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         900: {
    //             items: 3,
    //         }

    //     }
    // });





        // $(document).ready(function() {
        //     $('#mc_embed_signup').find('form').ajaxChimp();
        // });      








 });


/*

        var locations = [
          ['Kolkata', 22.572645, 88.363892, 4],
          ['Agra', 27.176670, 78.008072, 5],
          ['Mumbai', 19.075983, 72.877655, 3],
          ['Indore', 22.719568, 75.857727, 2],
          ['Lucknow', 26.846695, 80.946167, 1]
        ];
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(20.593683, 78.962883),
          styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ],
    
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        var infowindow = new google.maps.InfoWindow();
    
        var marker, i;
    
        for (i = 0; i < locations.length; i++) { 
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'images/commerce.svg'
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
*/