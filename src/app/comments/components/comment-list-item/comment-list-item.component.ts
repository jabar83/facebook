import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;
  @Output() deleteCommentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatarUrl() {
    if (this.comment && this.comment.author && this.comment.author.avatarUrl) {
      return this.comment.author.avatarUrl;
    } else {
      return "http://placeskull.com/50/50/66aaff";
    }
  }
  executeDelete() {
    console.log("Action delete pressed ", this.comment);
    this.deleteCommentEvent.emit(this.comment);

  }

}
