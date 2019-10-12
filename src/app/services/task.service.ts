import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>('http://localhost:8080/tasks');
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>('http://localhost:8080/tasks/' + id);
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>('http://localhost:8080/tasks/' + task.id, task);
  }

  deleteTask(id: number) {
    return this.http.delete<Task>('http://localhost:8080/tasks/' + id);
  }
}

