import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu/menu.component';
import { TaskListComponent } from '../tarea/tarea-list/task-list.component';
import { TaskService } from '../tarea/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = 'Itzel';

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this._taskService.getTaskList().subscribe(
      (data) => {
        console.log(data);
        this.user = data[0].user.username;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
