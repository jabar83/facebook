import { Component, OnInit } from '@angular/core';
import { ICommentList } from 'src/app/shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments= [
    {id: 'id1', body: 'body1'},
    {id: 'id2', body: 'body2'},
    {id: 'id3', body: 'body3'}
  ] as ICommentList;

  constructor() { }

  ngOnInit() {
  }

  addCommentFunction(commentEvent){
    console.log("Funkcja addCommentFunction została uruchomiona", commentEvent);
    this.comments.push(commentEvent);
  }

}
