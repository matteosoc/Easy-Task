import { NewTask } from './task/task.module';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from "./tasks.service"

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
  export class TasksComponent {
    @Input({ required: true }) name!: string;
    // @Input({ required: true }) name: string | undefined;
    @Input({ required: true }) userId!: string;

    isAddingTask: boolean = false;

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
      return this.tasksService.getUserTasks(this.userId);
    }
    
    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCloseAddTask() {
      this.isAddingTask = false;
    }

    // onAddTask(taskData: NewTask) {
    // }
  }
