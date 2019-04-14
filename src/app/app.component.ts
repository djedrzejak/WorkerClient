import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {}
  tasks: Array<Task>;


  getTasks() {
    this.httpService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  getTask(id: HTMLInputElement) {
    this.httpService.getTask(id.valueAsNumber).subscribe(task => {
      console.log(task);
    });
  }

}

