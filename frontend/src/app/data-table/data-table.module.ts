import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgDataTableComponent } from './ng-data-table/ng-data-table.component';
import { TextSlicerPipe } from './pipes/text-slicer.pipe';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { XpipePipe } from './pipes/xpipe.pipe';
@NgModule({
  declarations: [
    NgDataTableComponent,
    TextSlicerPipe,
    PaginatorPipe,
    XpipePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    NgDataTableComponent,
  ],
})
export class DataTableModule { }
