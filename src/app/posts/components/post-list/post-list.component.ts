import { Component, OnInit, Input } from '@angular/core';
import fakePosts from 'src/fakes/fake-posts'
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';

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

}
