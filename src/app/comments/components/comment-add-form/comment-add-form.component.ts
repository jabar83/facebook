import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/comment.interface';
import uuid from 'uuid';
import faker from 'faker';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment;

  @Output() addCommentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(addForm: NgForm) {
    //console.log("Submit button ", this.comment);
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toString();
    comment.author.id = uuid.v4();
    comment.author.name = faker.name.findName();
    comment.author.avatarUrl = "http://placeskull.com/50/50/000000";
    //console.log("Submit comment ", comment);
    this.addCommentEvent.emit(comment);
    addForm.reset();

  }

}
