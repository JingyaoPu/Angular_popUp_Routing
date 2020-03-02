import { Component, OnInit, Input, Output,EventEmitter, AfterViewInit } from '@angular/core';
import { PostService,Comments} from '../http-post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements AfterViewInit {
  
  comments:Comments;
  titles:string[];
  ready:boolean = false;
  @Input()
  commentsId:number;
  constructor(private postService:PostService) { 
    
  }

  ngAfterViewInit(): void {
    this.showComments();
  }

  showComments(){
    this.postService.getComments("http://jsonplaceholder.typicode.com/comments/"+this.commentsId).subscribe(Response => {
      console.log(Response);
      this.comments = Response;
      
      this.titles = Object.keys(this.comments);
      console.log(this.comments);
      this.ready = true;
    });
  }
  @Output()
  closed = new EventEmitter();

}
