import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',         class: '' },
    { path: '/jobs',          title: 'Munkalehetőségek',  icon:'nc-briefcase-24', class: '' },
    { path: '/workers',       title: 'Munkavállalók',     icon:'nc-settings',     class: '' },
    { path: '/users',         title: 'Felhasználók',      icon:'nc-badge',        class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}