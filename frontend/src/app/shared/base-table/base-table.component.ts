import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface INgTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() tableTitle: string = '';
  @Input() tableColumn: string[] = [];
  @Input()  list: T[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
