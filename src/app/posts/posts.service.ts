import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new BehaviorSubject<Post[]>([...this.posts])

  getPosts$ = this.postUpdated.asObservable()
  constructor() {}

  addPost(post: Post){
    this.posts.push(post)
    this.postUpdated.next([...this.posts])
  }

}
