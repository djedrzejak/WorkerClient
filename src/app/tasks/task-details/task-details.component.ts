import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { StatusService } from 'src/app/services/status.service';
import { PriorityService } from 'src/app/services/priority.service';
import { Task } from 'src/app/model/task';
import { Client } from 'src/app/model/client';
import { Status } from 'src/app/model/status';
import { Priority } from 'src/app/model/priority';
import { Comment } from 'src/app/model/comment';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task = new Task();

  priorities: Array<Priority>;
  statuses: Array<Status>;
  clients: Array<Client>;
  comments: Array<Comment>;
  newComment: Comment;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private priorityService: PriorityService,
              private statusService: StatusService,
              private clientService: ClientService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.loadDictionaries();
    this.getTask();
    this.newComment = new Comment();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
    this.getComments(id);
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

  getComments(id: number) {
    this.commentService.getCommentsByTaskId(id).subscribe(comments => {
      this.comments = comments;
    });
  }

  onSubmit() {
    this.taskService.updateTask(this.task).subscribe();
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.getComments(this.task.id);
    });
  }

  addNewComment() {
    console.log('Add Comment');
    this.newComment.task = this.task;
    this.commentService.saveCOmment(this.newComment).subscribe(() => {
      this.getComments(this.task.id);
    });
  }

}
