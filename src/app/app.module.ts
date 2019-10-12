import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { PriorityService } from './services/priority.service';
import { StatusService } from './services/status.service';
import { CommentService } from './services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { ClientsComponent } from './clients/clients.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LimitTextToPipe } from './pipes/limit-text-to.pipe';
import { HomeComponent } from './home/home.component';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    PageNotFoundComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskAddComponent,
    LimitTextToPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxPopper
  ],
  providers: [TaskService, PriorityService, StatusService, ClientService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
