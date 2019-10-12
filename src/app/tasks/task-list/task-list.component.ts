import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  errorMsg: string;

  constructor(private taskService: TaskService) {}

  tasks: Array<Task>;

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.clearErrorMsg();
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  clearErrorMsg() {
    this.errorMsg = null;
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.getTasks();
    });
  }

}
