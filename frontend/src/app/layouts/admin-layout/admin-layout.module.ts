import { DataTableModule } from './../../data-table/data-table.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes }    from './admin-layout.routing';

import { HomeComponent }        from '../../pages/home/home.component';
import { DashboardComponent }   from '../../pages/dashboard/dashboard.component';
import { UsersComponent }       from '../../pages/users/users.component';
import { WorkersComponent }     from '../../pages/workers/workers.component';
import { JobsComponent }        from '../../pages/jobs/jobs.component';
import { ReviewsComponent }        from '../../pages/reviews/reviews.component';

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
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    WorkersComponent,
    JobsComponent,
    ReviewsComponent
  ]
})

export class AdminLayoutModule {}
