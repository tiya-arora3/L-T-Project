import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  template: `
    <mat-toolbar color="primary">
      <mat-icon>people</mat-icon>
      <span class="title">Employee Dashboard</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a mat-button routerLink="/employees" routerLinkActive="active">Employees</a>
    </mat-toolbar>
    <style>
      .title { font-size: 1.5rem; font-weight: 600; margin-left: 10px; }
      .spacer { flex: 1 1 auto; }
      .active { font-weight: 600 !important; background: rgba(255,255,255,0.2) !important; }
    </style>
  `
})
export class NavbarComponent {}
