import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TareaListComponent } from '../../../modules/tarea/tarea-list/tarea-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, TareaListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  toTareas(){
    this.router.navigate(['tareas']);
  }

}
