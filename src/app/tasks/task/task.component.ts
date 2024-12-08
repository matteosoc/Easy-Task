import { TasksService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.module';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);
  
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
