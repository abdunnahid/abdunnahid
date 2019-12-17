import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMagificPopup();
    this.initPortfolioFilter();
  }

  initMagificPopup() {
    // For portfolio item
    $('#portfolio .projects .inner-projects .project-items .item-wrapper .overlay').magnificPopup({
      delegate: 'a',
      type: 'inline',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      fixedContentPos: true,
      callbacks: {
        beforeOpen: function () {
          $('html').addClass('mfp-helper');
        },
        close: function () {
          $('html').removeClass('mfp-helper');
        }
      }
    });
  }

  initPortfolioFilter() {
    // Checking if all images are loaded
    $('.projects .inner-projects .project-items').imagesLoaded(function () {
      // Init isotope once all images are loaded
      $('.projects .inner-projects .project-items').isotope({
        itemSelector: '.projects .inner-projects .project-items .single-item',
        layoutMode: 'masonry',
        transitionDuration: '0.8s'
      });
      // Forcing a perfect masonry layout after initial load
      $('.projects .inner-projects .project-items').isotope('layout');
      // Filter items when the button is clicked
      $('.projects .inner-projects .project-filters').on('click', 'a', function () {
        // Remove the current class from the previous element
        $('.projects .inner-projects .project-filters .current').removeClass('current');
        // Add the current class to the button clicked
        $(this).addClass('current');
        // Data filter
        var selector = $(this).attr('data-filter');
        $('.projects .inner-projects .project-items').isotope({
          filter: selector
        });
        setTimeout(function () {
          $('.projects .inner-projects .project-items').isotope('layout');
        }, 6);
        return false;
      });
    });
  }

}
