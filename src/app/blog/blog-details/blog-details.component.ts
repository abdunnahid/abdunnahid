import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoad(e): void {
    // console.log("TCL: BlogDetailsComponent -> constructor -> e", e)

  }
  onError(e): void {
    console.log("TCL: BlogDetailsComponent -> constructor -> e", e)

  }

}
