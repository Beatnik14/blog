import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  posts$ = this.postsService.getPosts$;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
  }
}
