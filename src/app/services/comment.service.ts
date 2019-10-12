import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsByTaskId(taskId: number): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments/' + taskId);
  }

  saveCOmment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('http://localhost:8080/comments', comment);
  }

  deleteComment(id: number) {
    return this.http.delete<Comment>('http://localhost:8080/comments/' + id);
  }
}
