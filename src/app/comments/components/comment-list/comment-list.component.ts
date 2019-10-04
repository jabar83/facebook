import { Component, Input, OnInit } from '@angular/core';
import { ICommentList } from 'src/app/shared/interfaces/comment-list.interface';
import { IComment } from 'src/app/shared/interfaces/comment.interface';

const OUT_OF_BOUND_INDEX  = -1;


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  constructor() { }

  ngOnInit() {
  }

  addCommentFunction(commentEvent: IComment) {
    //console.log("Funkcja addCommentFunction została uruchomiona", commentEvent);
    this.comments.push(commentEvent);

  }

  deleteCommentFunction(commentEvent: IComment) {
    console.log("Funkcja deleteCommentFunction została uruchomiona", commentEvent);
    const idx = this.comments.indexOf(commentEvent);
    if (idx !== OUT_OF_BOUND_INDEX) {
      console.log("Funkcja deleteCommentFunction idx", idx);
      console.log("Funkcja deleteCommentFunction przed zmianie", this.comments.length);
      this.comments.splice(idx, 1);
      console.log("Funkcja deleteCommentFunction po zmianie", this.comments.length);
    }
    //this.commentsthis.comments.filter(item => {item.id!= commentEvent.id});

  }

}
