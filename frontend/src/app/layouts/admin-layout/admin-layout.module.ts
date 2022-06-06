import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BaseTableComponent } from '../../shared/base-table/base-table.component'
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UsersComponent }            from '../../pages/users/users.component';
import { WorkersComponent }            from '../../pages/workers/workers.component';
import { JobsComponent }            from '../../pages/jobs/jobs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    BaseTableComponent,
    DashboardComponent,
    UsersComponent,
    WorkersComponent,
    JobsComponent
  ]
})

export class AdminLayoutModule {}
