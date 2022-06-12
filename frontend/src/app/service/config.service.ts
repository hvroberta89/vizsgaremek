import { Injectable } from '@angular/core';
import { INgTableColumn } from '../data-table/ng-data-table/ng-data-table.component';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  jobsTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'title', title: 'Cimke' },
    { key: 'nature', title: 'Jelleg' },
    { key: 'description', title: 'Részletes leírás' },
    { key: 'settlement', title: 'Település' },
    { key: 'date', title: 'Dátum' },
    { key: 'time', title: 'Idő' },
    { key: 'tools', title: 'Eszközök' },
    { key: 'amount', title: 'Bér' },
    { key: 'wage', title: 'Bér jellege' },
    { key: 'active', title: 'Aktív' },
    { key: 'editor_user_name', title: 'Munkaadó' },
    { key: 'worker_user_name', title: 'Munkavállaló' }
  ];
  workersTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'user_name', title: 'Felhasználónév' },
    { key: 'date_from', title: 'Dátum(-tól)' },
    { key: 'date_to', title: 'Dátum(-ig)' },
    { key: 'nature', title: 'Jelleg' },
    { key: 'settlement', title: 'Település' },
    { key: 'ratings', title: 'Értékelés' },
    { key: 'reviews', title: 'Vélemények' }
  ];
  usersTableColumns: INgTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'user_name', title: 'FElhasználónév' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'gender', title: 'nem' },
    { key: 'birth_date', title: 'Születési idő' },
    { key: 'address', title: 'Cím' },
    { key: 'email', title: 'Email' },
    { key: 'mobil_number', title: 'Mobilszám' }
  ];

  constructor() {}
}
