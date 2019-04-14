import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>('http://localhost:8080/tasks');
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>('http://localhost:8080/tasks/' + id);
  }

  addTask(task: Task) {

  }
}
