import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { Priority } from 'src/app/model/priority';
import { Status } from 'src/app/model/status';
import { Client } from 'src/app/model/client';
import { ActivatedRoute } from '@angular/router';
import { PriorityService } from 'src/app/services/priority.service';
import { ClientService } from 'src/app/services/client.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  task = new Task();

  priorities: Array<Priority>;
  statuses: Array<Status>;
  clients: Array<Client>;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private priorityService: PriorityService,
              private statusService: StatusService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.loadDictionaries();
    this.setDefaultDictionariesValues();
  }

  private setDefaultDictionariesValues() {
    this.task.priority = {id: 1};
    this.task.status = {id: 1};
    this.task.client = {id: 1};
  }

  private loadDictionaries() {
    this.getPriorities();
    this.getStatuses();
    this.getClients();
  }


  getPriorities() {
    this.priorityService.getPriorities().subscribe(priorities => {
      this.priorities = priorities;
    });
  }

  getStatuses() {
    this.statusService.getStatuses().subscribe(statuses => {
      this.statuses = statuses;
    });
  }

  getClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  onSubmit() {
    this.taskService.saveTask(this.task).subscribe(task => {
      console.log(this.task);
    });
  }

}
