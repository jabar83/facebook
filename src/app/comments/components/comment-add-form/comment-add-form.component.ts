import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit button");
  }

}
