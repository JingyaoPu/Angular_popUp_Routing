import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PostsTableComponent } from '../posts-table/posts-table.component';
import { ShowPostsService } from '../show-posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  constructor(injector: Injector, private showPostTableService: ShowPostsService) {
    // Convert `PopupComponent` to a custom element.
    const ele = createCustomElement(PostsTableComponent, { injector });
    // Register the custom element with the browser.
    try {
      customElements.define('post-element', ele);
    } catch (error) { console.log(error) }
  }

  ngOnInit(): void {
  }

  getPost(){
    this.showPostTableService.showPosts();
  }

  clearPost(){
    this.showPostTableService.clearPosts();
  }
  
}
