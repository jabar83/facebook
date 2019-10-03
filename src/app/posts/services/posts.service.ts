import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';
import { sortBy } from 'src/app/shared/helpers/sorter.helper';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  async getPosts() {
    const url = 'assets/fake-posts.json'
    let list = await this.http.get<IPostList>(url).toPromise();
    const newList = [...list];
    sortBy<IPostList>(newList, (post)=> {return  new Date(post.createdTime)});
    return newList;

  }
}
