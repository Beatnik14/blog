import { Post } from './posts/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'blog';
  storedPosts: Post[] = [];

  constructor(){}

  ngOnInit(): void {

  }


}
