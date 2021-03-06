import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  enteredContent: string;
  enteredTitle: string;

  constructor(private postService: PostService){}

  onAddPost(form: NgForm) {
    if (!form.invalid) {
      const newPost = {
        id: null,
        title: form.value.title,
        content: form.value.content,
      };
      this.postService.addPost(newPost);
      form.resetForm()
    }
  }
}
