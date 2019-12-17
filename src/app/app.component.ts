import { Component, OnInit } from '@angular/core';
declare const $;
declare const TypeIt;
declare const particlesJS;

enum ThemeEnum {
  Dark,
  Light
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit {

  theme: ThemeEnum = ThemeEnum.Light;
  particleConfig = {};
  constructor() { }

  ngOnInit(): void {
    this.preLoad(800);
    this.replaceVHeight();
    this.sidebarOverflowing();
    this.initTheme();
    this.initSidebar();
    this.useTypeIt();
    this.initParticles();
  }

  // Hide Loader
  preLoad(duration: number) {
    $('#pre-load').fadeOut(duration);
  }

  // Particle Effect Initialization
  initParticles() {
    if (this.theme === ThemeEnum.Dark) {
      this.particleConfig = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#1269fa'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#1269fa',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      };
    } else {
      this.particleConfig = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#fff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: .7,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      };
    }
    particlesJS('particles', this.particleConfig);
  }

  // Replace Viewport Height
  // Solves the issue about the viewport height on mobile devices as when the page loads
  replaceVHeight() {
    $('html').css({
      height: $(window).height()
    });
  }

  // Sidebar Overflowing
  sidebarOverflowing() {
    const sidebarWrapper = $('#sidebar-wrapper')[0];
    const sidebarBody = $('#body-sidebar');
    if (window.innerWidth >= 992) {
      if (sidebarWrapper.scrollHeight > sidebarWrapper.clientHeight) {
        $('#main-content-wrapper > div').css('paddingLeft', '25px');
        sidebarBody.css('paddingRight', '30px');
      } else {
        $('#main-content-wrapper > div').css('paddingLeft', 0);
        sidebarBody.css('paddingRight', '25px');
      }
    } else {
      $('#main-content-wrapper > div').css('paddingLeft', 0);
      sidebarBody.css('paddingRight', '30px');
    }
  }

  // Theme Initialization
  initTheme() {
    if (this.theme === ThemeEnum.Dark) {
      this.theme = ThemeEnum.Dark;
      $('html').attr('data-theme', 'dark');
    } else if (this.theme === ThemeEnum.Light) {
      this.theme = ThemeEnum.Light;
      $('html').attr('data-theme', 'light');
    }
  }
  // Switch Theme
  switchTheme(event?) {
    if (this.theme === ThemeEnum.Dark) {
      this.theme = ThemeEnum.Light;
      $('html').attr('data-theme', 'light');
    } else if (this.theme === ThemeEnum.Light) {
      this.theme = ThemeEnum.Dark;
      $('html').attr('data-theme', 'dark');
    }
    $('html').addClass('transition');
    window.setTimeout(() => {
      $('html').removeClass('transition');
    }, 750);
    this.initParticles();
  }

  // Use TypeIt.js
  useTypeIt() {
    if (typeof TypeIt !== 'undefined') {
      // tslint:disable-next-line: no-unused-expression
      new TypeIt('#sidebar-wrapper #head-sidebar .passion', {
        speed: 200,
        startDelay: 300,
        strings: ['Web Developer', 'UX/UI Designer', 'App Developer'],
        breakLines: false,
        loop: true
      });
    } else {
      return false;
    }
  }

  // Init Sidebar
  // Show or Hide the sidebar depending on the width of the window
  initSidebar() {
    if (window.innerWidth < 992) {
      this.isShowSidebar(0);
      this.isShowOverlay(0);
    } else {
      this.isShowOverlay(0);
      this.isShowSidebar(1);
    }
  }

  isShowSidebar(check) {
    const sidebarWrapper = $('#sidebar-wrapper');
    if (check === 0) {
      sidebarWrapper.css({
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateX(-300px)'
      });
    } else if (check === 1) {
      sidebarWrapper.css({
        visibility: 'visible',
        opacity: 1,
        transform: 'translateX(0)'
      });
    }
  }

  isShowOverlay(check) {
    const overlay = $('#main-content-wrapper > .overlay');
    if (check === 0) {
      overlay.css('display', 'none');
    } else if (check === 1) {
      overlay.css('display', 'block');
    }
  }

  // Toggle Sidebar
  // Hamburger Menu On Click
  hamburgerMenu() {
    this.isShowSidebar(1);
    this.isShowOverlay(1);
  }

  // Close Button On Click
  closeButton() {
    this.isShowSidebar(0);
    this.isShowOverlay(0);
  }

  // Window Resize
  onResize(event) {
    this.replaceVHeight();
    this.initSidebar();
    this.sidebarOverflowing();
  }

  // Sidemenu Routing
  sidemenuRouting(newRoute) {
    if (window.innerWidth < 992) {
      this.isShowSidebar(0);
      this.isShowOverlay(0);
    }
  }

}
