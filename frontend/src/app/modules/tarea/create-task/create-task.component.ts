import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu/menu.component';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

}
