import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskService } from '../task.service';
import { TaskList } from '../tarea.types';
import { MenuComponent } from '../../../shared/menu/menu/menu.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatSlideToggleModule, MenuComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  listTasks : TaskList[] = [];
  constructor(private _taskService : TaskService) { }
  ngOnInit(): void {
    this.getTaskList();
    
  }

  getTaskList(){
    this._taskService.getTaskList().subscribe(
      (data) => {
        this.listTasks = data;
        console.log(this.listTasks);
        
      },
      (error) => {
        console.error(error);
      }
    );

  }



}
