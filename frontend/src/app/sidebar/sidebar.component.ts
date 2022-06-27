import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home',          title: 'Főoldal',              icon:'nc-shop',           class: '' },
    { path: '/login',         title: 'Bejelentkezés',             icon:'nc-circle-10',      class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-sound-wave',     class: '' },
    { path: '/users',         title: 'Felhasználók',      icon:'nc-badge',          class: '' },
    { path: '/workers',       title: 'Munkavállalók',     icon:'nc-settings',       class: '' },
    { path: '/jobs',          title: 'Munkalehetőségek',  icon:'nc-briefcase-24',   class: '' },
    { path: '/categories',    title: 'Kategóriák',        icon:'nc-bullet-list-67', class: '' },
    { path: '/reviews',       title: 'Vélemények',        icon:'nc-chat-33',        class: '' }
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
