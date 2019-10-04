import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post: IPost = null;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }


  ngOnInit() {
    this.setupPost();

  }

  private async setupPost() {
    const postId = this.route.snapshot.params.postId;
    //console.log(postId);
    const post = await this.postsService.getPostById(postId);
    if (!post) {
      this.router.navigateByUrl('not-found');
    }
    this.post = post;
  }


  getPostAuthorAvatarUrl(): string {
    if (this.post && this.post.author) {
      return this.post.author.avatarUrl;
    }
    return '';
  }
}
