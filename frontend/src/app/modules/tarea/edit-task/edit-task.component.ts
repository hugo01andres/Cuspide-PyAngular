import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';
import { MenuComponent } from '../../../shared/menu/menu/menu.component';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule,MenuComponent,FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
  _taskService: TaskService;
  taskForm: any = {};
  constructor(private router: Router, private taskService: TaskService) {
    this._taskService = taskService;
  }

  ngOnInit() {
    //get task by id
    const id = localStorage.getItem('taskId');
    if (!id) {
      alert('Invalid action.');
      this.router.navigate(['/tasks']);
      return;
    }
    this._taskService.getTask(+id).subscribe(
      data => {
        this.taskForm = data;
      },
      error => {
        console.log(error);
      }
    );

  }

  cancel() {
    this.router.navigate(['/tasks']);
  }

  editTask() {
    this._taskService.editTask(this.taskForm).subscribe(
      data => {
        this.router.navigate(['/tasks']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
