import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  posts: Post[] = [];
  constructor(private postSerive: PostService) {}

  ngOnInit(): void {
    // this.posts = this.postSerive.getPosts();
    this.postSerive.getPosts()
    this.sub = this.postSerive
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
