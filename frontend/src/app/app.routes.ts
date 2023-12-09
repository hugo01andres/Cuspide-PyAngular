import { Routes } from '@angular/router';
import { TareaListComponent } from './modules/tarea/tarea-list/tarea-list.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path: 'tareas',
        component: TareaListComponent
    },
    {
        path: 'auth',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
