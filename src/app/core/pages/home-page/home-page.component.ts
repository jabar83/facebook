import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts = null;

  constructor(
    private postsService: PostsService) {
  }

  async ngOnInit() {
    this.posts = await this.postsService.getPosts();
  }

  private async setupPosts(){
    this.posts = await this.postsService.getPosts();
  }

}
