import { Routes } from '@angular/router';

import { HomeComponent } from 'app/pages/home/home.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { JobsComponent } from 'app/pages/jobs/jobs.component';
import { WorkersComponent } from 'app/pages/workers/workers.component';
import { ReviewsComponent } from 'app/pages/reviews/reviews.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'jobs',           component: JobsComponent},
    { path: 'workers',        component: WorkersComponent},
    { path: 'reviews',        component: ReviewsComponent}
];
