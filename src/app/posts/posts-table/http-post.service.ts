import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(url): Observable<Post[]> {
    return this.http.get<Post[]>(url);
  }

  getComments(url): Observable<Comments> {
    return this.http.get<Comments>(url);
  }
}

export class Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export class Comments {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}
