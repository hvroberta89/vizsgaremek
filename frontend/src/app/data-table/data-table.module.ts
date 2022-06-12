import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgDataTableComponent } from './ng-data-table/ng-data-table.component';

@NgModule({
  declarations: [
    NgDataTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NgDataTableComponent,
  ],
})
export class DataTableModule { }
