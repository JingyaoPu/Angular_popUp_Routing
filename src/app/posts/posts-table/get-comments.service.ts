import { Injectable, ViewChild } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { Comments } from './http-post.service';
@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor() {

  }
  getCommonts(id:number){
    let el:NgElement & WithProperties<{commentsId:number}> = document.createElement('comments-element') as any;
    el.addEventListener('closed', () => {
      console.log("close")
      document.body.removeChild(el)
    });
    el.commentsId = id;
    console.log(el.commentsId)
    document.body.appendChild(el);
    
  }
}
