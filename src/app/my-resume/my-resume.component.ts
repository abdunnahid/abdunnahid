import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.skillbar').each(function () {
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      }, 4000);
    });

    $('.Count').each(function () {
      var $this = $(this);
      $({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 4000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }

  initSkillbar(width: number) {

  }

}
