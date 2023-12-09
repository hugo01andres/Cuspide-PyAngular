import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TareaService } from '../tarea.service';
import { TaskList } from '../tarea.types';
@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent implements OnInit{
  listTasks : TaskList[] = [];
  constructor(private _taskService : TareaService) { }
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
