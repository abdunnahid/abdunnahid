import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  pageTitle: string;
  articlePath: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.articlePath = `assets/articles/${this.activateRoute.snapshot.params['id']}/${this.activateRoute.snapshot.params['id']}.md`;
    console.log("TCL: BlogDetailsComponent -> ngOnInit -> this.articlePath", this.articlePath)
    this.pageTitle = this.activateRoute.snapshot.queryParams['title'];
  }

  onLoad(e): void {
    // console.log("TCL: BlogDetailsComponent -> constructor -> e", e)

  }
  onError(e): void {
    console.log('Error loading file:', e);
  }

}
