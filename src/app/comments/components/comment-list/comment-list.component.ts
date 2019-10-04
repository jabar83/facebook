import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('dialog', { static: true }) dialog = null;

  constructor() { }

  ngOnInit() {
  }

  addCommentFunction(commentEvent: IComment) {
    //console.log("Funkcja addCommentFunction została uruchomiona", commentEvent);
    this.comments.push(commentEvent);

  }

  deleteCommentFunctionWithConfirmation(commentEvent: IComment){
    this.dialog.show();
    this.dialog.__commentToRemove = commentEvent;
  }

  deleteCommentAndCloseFunction(){
    this.deleteCommentFunction();
    this.dialog.hide();
  }


  private deleteCommentFunction() {
    console.log("Funkcja deleteCommentFunction została uruchomiona", this.dialog.__commentToRemove);
    const idx = this.comments.indexOf(this.dialog.__commentToRemove);
    if (idx !== OUT_OF_BOUND_INDEX) {
      console.log("Funkcja deleteCommentFunction idx", idx);
      console.log("Funkcja deleteCommentFunction przed zmianie", this.comments.length);
      this.comments.splice(idx, 1);
      console.log("Funkcja deleteCommentFunction po zmianie", this.comments.length);
    }
  }

}
