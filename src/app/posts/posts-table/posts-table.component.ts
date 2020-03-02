import { Component, OnInit, Injector} from '@angular/core';
import { PostService,Post} from './http-post.service';
import { CommentsComponent } from './comments/comments.component';
import { createCustomElement } from '@angular/elements';
import { GetCommentsService } from './get-comments.service';
@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {
  posts:Post[];
  titles: string[] = [];
  constructor(private getCommentsService:GetCommentsService,private postService:PostService, injector:Injector ) { 
    console.log("PostsTableComponent on construction")
    const PopupElement = createCustomElement(CommentsComponent, {injector});
    // Register the custom element with the browser.
    try {
      customElements.define('comments-element', PopupElement);
    } catch (error) {}
  }

  ngOnInit(): void {
    console.log("PostsTableComponent on init")
    this.postService.getPosts("http://jsonplaceholder.typicode.com/posts").subscribe(Response => {
      this.posts = Response;
      this.titles = Object.keys(this.posts[0]);
    });
  }

  showComments(id:number){
    this.getCommentsService.getCommonts(id);
  }
  



}

