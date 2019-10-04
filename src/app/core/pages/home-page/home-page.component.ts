import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts = null;
  error = null;

  constructor(
    private postsService: PostsService) {
  }

  async ngOnInit() {
    this.setupPosts();
  }

  private async setupPosts() {
    try {
      this.posts = await this.postsService.getPosts();
    } catch (err) {
      //console.log(err);
      this.error = err;
       
    }
  }

}
