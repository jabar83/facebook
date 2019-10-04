import { Component, OnInit, Input } from '@angular/core';
import fakePosts from 'src/fakes/fake-posts'
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';

const OUT_OF_BOUND_INDEX  = -1;


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;

  constructor() { }

  ngOnInit() {
  }

  addPostFunction(postEvent: IPost){
    //"Funkcja addPostFunction została uruchomiona", postEvent);
    this.posts.unshift(postEvent);
    //console.log("postEvent: ", this.posts.length);
  }

  deletePostFunction(postEvent: IPost){
    //"Funkcja deletePostFunction została uruchomiona", postEvent);
    console.log("Funkcja deletePostFunction została uruchomiona", postEvent);
    const idx = this.posts.indexOf(postEvent);
    if (idx !== OUT_OF_BOUND_INDEX) {
      console.log("Funkcja deleteCommentFunction idx", idx);
      console.log("Funkcja deleteCommentFunction przed zmianie", this.posts.length);
      this.posts.splice(idx, 1);
      console.log("Funkcja deleteCommentFunction po zmianie", this.posts.length);
    }
  }

}
