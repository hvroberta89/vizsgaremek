import { Injectable } from '@angular/core';
import { INgTableColumn } from '../data-table/ng-data-table/ng-data-table.component';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  usersTableColumns: INgTableColumn[] = [
    //{ key: '_id', title: '#' },
    { key: 'user_name', title: 'Felhasználónév' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'gender', title: 'Neme' },
    { key: 'photo', title: 'Profilkép' },
    { key: 'birth_date',
      title: 'Születési idő',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["-", 'year', 'month', 'day']]
    },
    { key: 'address',
      title: 'Cím',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [[" ", 'zipCode', 'city', 'street', 'number']]
    },
    { key: 'email', title: 'Email' },
    { key: 'mobil_number', title: 'Mobilszám' },
    { key: 'password', title: 'Jelszó' },
    { key: 'role', title: 'Jogosultság' }
  ];
  workersTableColumns: INgTableColumn[] = [
    //{ key: '_id', title: '#' },
    { key: 'editor_user', title: 'Felhasználónév' },
    { key: 'date_from', title: 'Dátum(-tól)',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["-", 'year', 'month', 'day']]
    },
    { key: 'date_to', title: 'Dátum(-ig)',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["-", 'year', 'month', 'day']]
    },
    { key: 'category', title: 'Kategória' },
    { key: 'description', title: 'Leírás' },
    { key: 'settlement', title: 'Település' },
    { key: 'reviews', title: 'Vélemények' }
  ];
  jobsTableColumns: INgTableColumn[] = [
    //{ key: '_id', title: '#' },
    { key: 'title', title: 'Cimke' },
    { key: 'category', title: 'Kategória' },
    { key: 'description', title: 'Részletes leírás',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 50]]
     },
    { key: 'settlement', title: 'Település' },
    { key: 'date', title: 'Dátum',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["-", 'year', 'month', 'day']]
    },
    { key: 'time', title: 'Idő' },
    { key: 'tools', title: 'Eszközök' },
    { key: 'amount', title: 'Bér' },
    { key: 'wage', title: 'Bér jellege' },
    { key: 'active', title: 'Aktív' },
    { key: 'user_name', title: 'Munkaadó' },
    { key: 'worker_user', title: 'Munkavállaló' }
  ];
  categoriesTableColumns: INgTableColumn[] = [
    //{ key: '_id', title: '#' },
    { key: 'title', title: 'Megnevezés' },
    { key: 'description', title: 'Leírás' },
  ];
  reviewsTableColumns: INgTableColumn[] = [
    //{ key: '_id', title: '#' },
    { key: 'editor_user', title: 'Felhasználónév',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["", 'user_name']]
    },
    { key: 'rated_user', title: 'Értékelt felhasználó' },
    { key: 'score', title: 'Pontszám' },
    { key: 'positive', title: 'Pozitívum' },
    { key: 'negative', title: 'Negatívum' },
    { key: 'review_date', title: 'Értékelés dátuma',
      pipes: [ConfigService.createStrFromObj],
      pipeArgs: [["-", 'year', 'month', 'day']]
    }
  ];


  constructor() {}

  static createStrFromObj(obj: any, sep: string, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(sep);
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
