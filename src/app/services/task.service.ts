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
    return this.http.get<Array<Task>>('http://djedrzejak-worker-manager-serv.herokuapp.com/tasks');
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>('http://djedrzejak-worker-manager-serv.herokuapp.com/tasks/' + id);
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://djedrzejak-worker-manager-serv.herokuapp.com/tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>('http://djedrzejak-worker-manager-serv.herokuapp.com/tasks/' + task.id, task);
  }

  deleteTask(id: number) {
    return this.http.delete<Task>('http://djedrzejak-worker-manager-serv.herokuapp.com/tasks/' + id);
  }
}

