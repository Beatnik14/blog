import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new BehaviorSubject<Post[]>([...this.posts]);
  apiUrl = 'http://localhost:3000/api/posts';

  getPosts$ = this.postUpdated.asObservable();
  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>(this.apiUrl)
      .subscribe((data) => {
        this.posts = data.posts;
        this.postUpdated.next([...this.posts]);
      });
  }

  addPost(post: Post) {
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe(() => {
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
  }
}
