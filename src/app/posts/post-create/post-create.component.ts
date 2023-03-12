import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {

  constructor(private postsService: PostsService){}

  onAddPost(form: NgForm) {
    const post: Post = {
      id: null,
      title: form.value.title,
      content: form.value.content
    }
    this.postsService.addPost(post)
    form.resetForm()
  }
}
