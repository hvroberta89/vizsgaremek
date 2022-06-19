import { DataTableModule } from './../../data-table/data-table.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes }    from './admin-layout.routing';

import { DashboardComponent }   from '../../pages/dashboard/dashboard.component';
import { UsersComponent }       from '../../pages/users/users.component';
import { WorkersComponent }     from '../../pages/workers/workers.component';
import { JobsComponent }        from '../../pages/jobs/jobs.component';
import { ReviewsComponent }        from '../../pages/reviews/reviews.component';

import { ReviewEditorComponent } from './../../pages/review-editor/review-editor.component';
import { WorkerEditorComponent } from './../../pages/worker-editor/worker-editor.component';
import { JobEditorComponent } from './../../pages/job-editor/job-editor.component';
import { UserEditorComponent } from './../../pages/user-editor/user-editor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DataTableModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    WorkersComponent,
    JobsComponent,
    ReviewsComponent,
    ReviewEditorComponent,
    WorkerEditorComponent,
    JobEditorComponent,
    UserEditorComponent
  ]
})

export class AdminLayoutModule {}
