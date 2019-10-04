import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost = null;
  @Output() deletePostEvent = new EventEmitter();

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

  executeDeletePost(){
    console.log("Action delete pressed ", this.post);
    this.deletePostEvent.emit(this.post);
  }

}
