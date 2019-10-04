import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  @Output() addPostEvent = new EventEmitter();

  post = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null,
    images: []
  } as IPost;


  addPostForm = new FormGroup(
    {
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
  );

  get body(){
    return this.addPostForm.get('body');
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const postForm = this.addPostForm.getRawValue();
    //console.log("PostAddFormComponent : on Submit", postForm);
    const newPost = Object.assign(this.post, postForm);
    newPost.id = uuid.v4();
    newPost.createdTime = new Date().toString();
    newPost.author.id = uuid.v4();
    newPost.author.name = faker.name.findName();
    newPost.author.avatarUrl="http://placeskull.com/50/50/000000";
    newPost.images[0]=("http://placeskull.com/50/50/000000");
    this.addPostEvent.emit(newPost);
    //Czyszczenie pól formularza
    this.addPostForm.reset();
  }

}
