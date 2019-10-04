import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from 'src/app/shared/interfaces/post-list.interface';
import { sortByOperator, sortBy } from 'src/app/shared/helpers/sorter.helper';
import { environment } from 'src/environments/environment';
import { find } from 'rxjs/operators';
import { IPost } from 'src/app/shared/interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  async getPosts(): Promise<IPostList> {
    const url = environment.postsUrl
    let list = await this.http.get<IPostList>(url)
    // .pipe(
    //   sortByOperator('createdTime')
    //   )
    .toPromise();
    sortBy<IPostList>(response, (post)=> new Date(post.))
    return list;

  }

  async getPostById(postId: string): Promise<IPost>{
    const url = environment.postsUrl
    let list = await this.http.get<IPostList>(url).toPromise();
    return list.find(post => post.id==postId);
  }
}
