import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {

}
