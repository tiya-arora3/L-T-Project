import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatGridListModule, MatProgressSpinnerModule, MatIconModule, MatChipsModule],
  template: `
    <div class="dashboard-container">
      <div class="stats-grid">
        <mat-card class="stat-card total">
          <mat-card-content>
            <div class="stat-number">{{ totalEmployees }}</div>
            <div class="stat-label">Total Employees</div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card active">
          <mat-card-content>
            <div class="stat-number">{{ activeEmployees }}</div>
            <div class="stat-label">Active</div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card inactive">
          <mat-card-content>
            <div class="stat-number">{{ inactiveEmployees }}</div>
            <div class="stat-label">Inactive</div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card on-leave">
          <mat-card-content>
            <div class="stat-number">{{ onLeaveEmployees }}</div>
            <div class="stat-label">On Leave</div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="recent-hires">
        <mat-card class="recent-card">
          <mat-card-header>
            <mat-card-title>Recent Hires</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="employee-item" *ngFor="let employee of recentEmployees">
              <mat-icon>person</mat-icon>
              <div class="employee-info">
                <div class="name">{{ employee.name }}</div>
                <div class="role">{{ employee.role }}</div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
    <style>
      .dashboard-container { padding: 2rem; max-width: 1400px; margin: 0 auto; }
      .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
      .stat-card { transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
      .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
      .stat-card.total { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
      .stat-card.active { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; }
      .stat-card.inactive { background: linear-gradient(135deg, #f44336, #da190b); color: white; }
      .stat-card.on-leave { background: linear-gradient(135deg, #ff9800, #e68900); color: white; }
      .stat-number { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
      .stat-label { font-size: 1rem; opacity: 0.9; }
      
      .recent-hires { margin-top: 2rem; }
      .recent-card { max-width: 600px; }
      .employee-item { display: flex; align-items: center; padding: 1rem 0; border-bottom: 1px solid #eee; }
      .employee-item:last-child { border-bottom: none; }
      .employee-item mat-icon { font-size: 2rem; margin-right: 1rem; }
      .employee-info .name { font-weight: 600; margin-bottom: 0.25rem; }
      .employee-info .role { color: #666; font-size: 0.9rem; }
      
      @media (max-width: 768px) {
        .dashboard-container { padding: 1rem; }
        .stats-grid { grid-template-columns: 1fr; }
        .stat-number { font-size: 2rem; }
      }
    </style>
  `
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  activeEmployees = 0;
  inactiveEmployees = 0;
  onLeaveEmployees = 0;
  recentEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.totalEmployees = employees.length;
      this.activeEmployees = employees.filter(e => e.status === 'Active').length;
      this.inactiveEmployees = employees.filter(e => e.status === 'Inactive').length;
      this.onLeaveEmployees = employees.filter(e => e.status === 'On Leave').length;
      
      // Get 5 most recent hires (sorted by hireDate)
      this.recentEmployees = employees
        .sort((a, b) => new Date(b.hireDate).getTime() - new Date(a.hireDate).getTime())
        .slice(0, 5);
    });
  }
}
