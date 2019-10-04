import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost = null;

  constructor() { }

  ngOnInit() {
  }
  //Zachodzi aktualizacja change detector widok / model 
  ngOnChanges(change: SimpleChanges) {
    //console.log('ngOnChanges:', change);
    if (change.post && change.post.firstChange) {
      this.post.comments = [];
    }
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
