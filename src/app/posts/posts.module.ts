import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { CommentsComponent } from './posts-table/comments/comments.component';


@NgModule({
  declarations: [PostComponent, PostsTableComponent, CommentsComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
