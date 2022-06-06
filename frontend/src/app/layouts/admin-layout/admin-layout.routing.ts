import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { JobsComponent } from 'app/pages/jobs/jobs.component';
import { WorkersComponent } from 'app/pages/workers/workers.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'jobs',           component: JobsComponent},
    { path: 'workers',        component: WorkersComponent}
];
