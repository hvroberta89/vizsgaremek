import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface INgTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss']
})
export class NgDataTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() tableTitle: string = '';
  @Input() tableColumn: INgTableColumn[] = [];
  @Input()  list: T[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
