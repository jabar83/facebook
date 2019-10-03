import { Component, OnInit, Input } from '@angular/core';
import fakePosts from 'src/fakes/fake-posts'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;

  constructor() { }

  ngOnInit() {
  }

}
