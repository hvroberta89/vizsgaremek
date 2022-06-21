import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

export interface INgTableColumn {
  title: string;
  key: string;
  pipes?: any[];
  pipeArgs?: any[];
}
@Component({
  selector: 'ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss']
})
export class NgDataTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() tableTitle: string = '';
  @Input() tableColumn: INgTableColumn[] = [];
  @Input() list: T[] = [];

  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteOne: EventEmitter<T> = new EventEmitter<T>();

  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onChangePage(pe:PageEvent) {
    this.pageIndex = pe.pageIndex;
    this.pageSize = pe.pageSize;
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }

  onDelete(entity: T): void {
    this.deleteOne.emit(entity);
  }

}
