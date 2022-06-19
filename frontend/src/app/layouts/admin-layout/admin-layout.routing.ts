import { LoginComponent } from './../../pages/login/login.component';
import { Routes } from '@angular/router';

import { HomeComponent } from 'app/pages/home/home.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { JobsComponent } from 'app/pages/jobs/jobs.component';
import { WorkersComponent } from 'app/pages/workers/workers.component';
import { ReviewsComponent } from 'app/pages/reviews/reviews.component';
import { UserComponent } from 'app/pages/user/user.component';
import { ReviewEditorComponent } from './../../pages/review-editor/review-editor.component';
import { WorkerEditorComponent } from './../../pages/worker-editor/worker-editor.component';
import { JobEditorComponent } from './../../pages/job-editor/job-editor.component';
import { UserEditorComponent } from './../../pages/user-editor/user-editor.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',             component: HomeComponent  },
    { path: 'login',            component: LoginComponent  },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'users',            component: UsersComponent},
    { path: 'users/edit/:id',   component: UserEditorComponent},
    { path: 'jobs',             component: JobsComponent},
    { path: 'jobs-edit/:id',    component: JobEditorComponent},
    { path: 'workers',          component: WorkersComponent},
    { path: 'workers/edit/:id', component: WorkerEditorComponent},
    { path: 'reviews',          component: ReviewsComponent},
    { path: 'reviews/edit/:id', component: ReviewEditorComponent},
    { path: 'user',             component: UserComponent},
];
