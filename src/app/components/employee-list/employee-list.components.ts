import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Employee, ALL_EMPLOYEES } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- 🔥 MARKETING BANNER -->
    <div class="marketing-banner">
      <div class="banner-content">
        🚀 <strong>20+ Talented Employees</strong> | 
        <span class="highlight">Hiring Now!</span> 
        <a href="#" class="banner-btn">Join Us →</a>
      </div>
    </div>

    <div class="container">
      <div class="navbar">
        <h1>👥 Employee Directory ({{ employees.length }})</h1>
        <div class="filters">
          <button class="filter-btn" [class.active]="selectedDept === 'All'" (click)="filterByDepartment('All')">
            📋 All ({{getTotalCount()}})
          </button>
          <button class="filter-btn" [class.active]="selectedDept === 'Engineering'" (click)="filterByDepartment('Engineering')">
            🛠️ Engineering ({{getDeptCount('Engineering')}})
          </button>
          <button class="filter-btn" [class.active]="selectedDept === 'Marketing'" (click)="filterByDepartment('Marketing')">
            📈 Marketing ({{getDeptCount('Marketing')}})
          </button>
          <button class="filter-btn" [class.active]="selectedDept === 'HR'" (click)="filterByDepartment('HR')">
            👥 HR ({{getDeptCount('HR')}})
          </button>
          <button class="filter-btn" [class.active]="selectedDept === 'Sales'" (click)="filterByDepartment('Sales')">
            💼 Sales ({{getDeptCount('Sales')}})
          </button>
          <button class="filter-btn" [class.active]="selectedDept === 'Finance'" (click)="filterByDepartment('Finance')">
            💰 Finance ({{getDeptCount('Finance')}})
          </button>
        </div>
      </div>
      <div class="results">{{ filteredEmployees.length }} employees found</div>
      <div class="grid">
        <div class="card" *ngFor="let employee of filteredEmployees">
          <div class="card-header">
            <!-- ✅ ORIGINAL COLORED AVATARS (NO IMAGES) -->
            <div class="avatar" [style.background]="'linear-gradient(135deg, ' + getDeptColor(employee.department) + ', #764ba2)'">
              {{ getInitials(employee.name) }}
            </div>
            <div>
              <h3>{{ employee.name }}</h3>
              <p>{{ employee.role }} • {{ employee.department }}</p>
            </div>
          </div>
          <div class="card-body">
            <div class="badges">
              <span class="status-badge" [ngClass]="employee.status.toLowerCase()">{{ employee.status }}</span>
              <span class="salary">₹{{ employee.salary | number }}</span>
              <span class="date">{{ employee.hireDate | date:'MMM d' }}</span>
            </div>
            <div class="actions">
              <a routerLink="/employee/{{ employee.id }}" class="btn-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* 🔥 MARKETING BANNER */
    .marketing-banner {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .banner-content {
      font-size: 1.1rem;
      font-weight: 500;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .highlight {
      color: #ffd700;
      font-weight: 700;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }
    .banner-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 600;
      backdrop-filter: blur(10px);
      transition: all 0.3s;
      border: 1px solid rgba(255,255,255,0.3);
    }
    .banner-btn:hover {
      background: rgba(255,255,255,0.3);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    /* ORIGINAL STYLES (NO IMAGE CHANGES) */
    .container { padding: 2rem; max-width: 1400px; margin: 0 auto; }
    .navbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
    h1 { color: #3f51b5; font-size: 2.5rem; margin: 0; }
    .filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .filter-btn { padding: 0.8rem 1.5rem; border: 2px solid #e0e0e0; background: white; border-radius: 25px; cursor: pointer; font-weight: 500; transition: all 0.3s; font-size: 0.9rem; white-space: nowrap; }
    .filter-btn:hover { border-color: #667eea; transform: translateY(-2px); }
    .filter-btn.active { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-color: #667eea; }
    .results { color: #666; font-size: 1.1rem; margin-bottom: 1rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 2rem; }
    .card { background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s; }
    .card:hover { transform: translateY(-8px); }
    .card-header { padding: 2rem; display: flex; gap: 1rem; border-bottom: 1px solid #f0f0f0; }
    
    /* AVATAR */
    .avatar { 
      width: 60px; height: 60px; border-radius: 50%; 
      display: flex; align-items: center; justify-content: center; 
      color: white; font-weight: bold; font-size: 1.1rem; flex-shrink: 0; 
    }
    
    .card-header h3 { margin: 0 0 0.25rem 0; font-size: 1.4rem; color: #333; }
    .card-header p { margin: 0; color: #666; font-size: 0.95rem; }
    .card-body { padding: 1.5rem 2rem; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 1.5rem; font-size: 0.9rem; }
    .status-badge { padding: 0.4rem 1.2rem !important; border-radius: 20px !important; font-weight: 600 !important; color: white !important; }
    .status-badge.active { background: #4CAF50 !important; }
    .status-badge.inactive { background: #f44336 !important; }
    .status-badge.on-leave { background: #ff9800 !important; }
    .salary { background: rgba(102,126,234,0.1); color: #667eea; padding: 0.3rem 1rem; border-radius: 20px; }
    .date { background: rgba(76,175,80,0.1); color: #4CAF50; padding: 0.3rem 1rem; border-radius: 20px; }
    .actions { text-align: right; }
    .btn-primary { background: #3f51b5; color: white; padding: 0.7rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 500; }
    .btn-primary:hover { background: #5c6bc0; }
    @media (max-width: 768px) { 
      .navbar { flex-direction: column; align-items: flex-start; } 
      .filters { width: 100%; justify-content: center; }
      .banner-content { flex-direction: column; gap: 0.5rem; font-size: 1rem; }
    }
  `]
})
export class EmployeeListComponent implements OnInit {
  employees = ALL_EMPLOYEES;
  selectedDept: string = 'All';
  filteredEmployees: Employee[] = [];

  ngOnInit() { this.filterByDepartment('All'); }

  filterByDepartment(dept: string) {
    this.selectedDept = dept;
    if (dept === 'All') {
      this.filteredEmployees = [...this.employees];
    } else {
      this.filteredEmployees = this.employees.filter((e: Employee) => e.department === dept);
    }
  }

  getTotalCount(): number { return this.employees.length; }
  getDeptCount(dept: string): number { return this.employees.filter((e: Employee) => e.department === dept).length; }
  getInitials(name: string): string { return name.split(' ').map(n => n[0]).join('').toUpperCase(); }
  getDeptColor(dept: string): string {
    const colors: { [key: string]: string } = { 
      'Engineering': '#667eea', 'Marketing': '#ff9800', 
      'HR': '#4CAF50', 'Sales': '#f44336', 'Finance': '#9C27B0' 
    };
    return colors[dept] || '#667eea';
  }
}
