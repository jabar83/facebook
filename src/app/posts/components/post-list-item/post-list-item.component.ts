import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  getPostUrl(): string {
    if (this.post) {
      return `/posts/${this.post.id}`;
    }
    return '';
  }
  getPostAuthorAvatarUrl(): string {
    if (this.post && this.post.author) {
      return this.post.author.avatarUrl;
    }
    return '';
  }

}
