import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';
import { sortByOperator } from 'src/app/shared/helpers/sorter.helper';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  async getPosts() {
    const url = 'assets/fake-posts.json'
    let list = await this.http.get<IPostList>(url)
    .pipe(
      sortByOperator('createdTime')
      )
    .toPromise();
    const newList = [...list];
    ;
    return newList;

  }
}
