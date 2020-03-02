import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PostsTableComponent } from './posts-table/posts-table.component';


@Injectable({
  providedIn: 'root'
})
export class ShowPostsService {
  el:NgElement & WithProperties<PostsTableComponent>;
  constructor() { 
    console.log("ShowPostsService on construction")
  }
  showPosts(){
    console.log("ShowPostsService showPosts called")
    this.el = document.createElement("post-element") as any;
    console.log(this.el)
    //document.body.appendChild(this.el);
    document.getElementById("postTable").appendChild(this.el);
  }
  clearPosts(){
    console.log("ShowPostsService clear called")
    document.getElementById("postTable").removeChild(this.el);
  }
}
