import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {id: 'id1', body: 'Hello world'},
    {id: 'id2', body: 'Lubię koty'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
