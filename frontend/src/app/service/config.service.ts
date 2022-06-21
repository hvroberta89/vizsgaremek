import { Injectable } from '@angular/core';
import { INgTableColumn } from '../data-table/ng-data-table/ng-data-table.component';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  jobsTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'title', title: 'Cimke' },
    { key: 'category', title: 'Kategória' },
    { key: 'description', title: 'Részletes leírás',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 100]]
     },
    { key: 'settlement', title: 'Település' },
    { key: 'date', title: 'Dátum' },
    { key: 'time', title: 'Idő' },
    { key: 'tools', title: 'Eszközök' },
    { key: 'amount', title: 'Bér' },
    { key: 'wage', title: 'Bér jellege' },
    { key: 'active', title: 'Aktív' },
    { key: 'editor_user', title: 'Munkaadó' },
    { key: 'worker_user', title: 'Munkavállaló' }
  ];
  workersTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'editor_user', title: 'Felhasználónév' },
    { key: 'date_from', title: 'Dátum(-tól)' },
    { key: 'date_to', title: 'Dátum(-ig)' },
    { key: 'category', title: 'Kategória' },
    { key: 'description', title: 'Leírás' },
    { key: 'settlement', title: 'Település' },
    { key: 'reviews', title: 'Vélemények' }
  ];
  reviewsTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'editor_user', title: 'Felhasználónév' },
    { key: 'rated_user', title: 'Értékelt felhasználó' },
    { key: 'score', title: 'Pontszám' },
    { key: 'positive', title: 'Pozitívum' },
    { key: 'negative', title: 'Negatívum' },
    { key: 'review_date', title: 'Értékelés dátuma' }
  ];
  usersTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'user_name', title: 'Felhasználónév' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'gender', title: 'Neme' },
    { key: 'birth_date', title: 'Születési idő' },
    { key: 'address',
      title: 'Cím',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [['zipCode', 'city', 'street', 'number']]
    },
    { key: 'email', title: 'Email' },
    { key: 'mobil_number', title: 'Mobilszám' },
    { key: 'password', title: 'Jelszó' },
    { key: 'role', title: 'Jogosultság' }
  ];

  constructor() {}

  static createStrFromObj(obj: any, ...keys: string[]): string | number | boolean | undefined {
    console.log(obj);
    return keys.map( key => get(obj, key) ).join(' ');
  }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data.slice(start, end) + curve;
  }



}
