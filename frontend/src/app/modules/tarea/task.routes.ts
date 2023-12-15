import { Routes } from "@angular/router";
import { TaskListComponent }  from "../tarea/tarea-list/task-list.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { sessionGuard } from "../../core/guards/session.guard";

export const taskRoutes: Routes = [
    {
        path: '',
        component: TaskListComponent
    },
    {
        path: 'create',
        component: CreateTaskComponent
    }

];

