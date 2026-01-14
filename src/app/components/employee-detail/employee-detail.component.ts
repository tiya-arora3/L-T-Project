import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee, ALL_EMPLOYEES } from '../../models/employee';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container">
      <a routerLink="/employees" class="back-btn">← Back to Employees</a>
      <div class="profile-card" *ngIf="employee">
        <div class="profile-header">
          <div class="avatar" [style.background]="'linear-gradient(135deg, ' + getDeptColor(employee!.department) + ', #764ba2)'">
            {{ getInitials(employee!.name) }}
          </div>
          <div class="profile-info">
            <h1>{{ employee!.name }}</h1>
            <p class="role">{{ employee!.role }} - {{ employee!.department }}</p>
            <span class="status-badge" [ngClass]="employee!.status.toLowerCase()">{{ employee!.status }}</span>
          </div>
        </div>
        <div class="profile-body">
          <div class="info-grid">
            <div class="info-card">
              <h3>📧 Contact Info</h3>
              <p><strong>Email:</strong> {{ employee!.email }}</p>
              <p><strong>Phone:</strong> {{ employee!.phone }}</p>
            </div>
            <div class="info-card">
              <h3>💰 Compensation</h3>
              <p class="salary">₹{{ employee!.salary | number }}</p>
              <p><strong>Hired:</strong> {{ employee!.hireDate | date:'MMM d, y' }}</p>
            </div>
          </div>
          <div class="edit-section">
            <h3>✏️ Edit Employee</h3>
            <div class="form-grid">
              <input [(ngModel)]="employee!.name" placeholder="Full Name" class="form-input">
              <input [(ngModel)]="employee!.email" type="email" placeholder="Email" class="form-input">
              <input [(ngModel)]="employee!.phone" placeholder="Phone" class="form-input">
              <select [(ngModel)]="employee!.department" class="form-input">
                <option>Engineering</option><option>Marketing</option><option>HR</option><option>Sales</option><option>Finance</option>
              </select>
              <input [(ngModel)]="employee!.role" placeholder="Role" class="form-input">
              <input [(ngModel)]="employee!.salary" type="number" placeholder="Salary" class="form-input">
              <button (click)="saveEmployee()" class="save-btn">💾 Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, 
  styles: [`
    .container { padding: 2rem; max-width: 1000px; margin: 0 auto; }
    .back-btn { display: inline-flex; align-items: center; gap: 0.5rem; color: #3f51b5; text-decoration: none; margin-bottom: 2rem; font-weight: 500; font-size: 1.1rem; }
    .profile-card { background: white; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); overflow: hidden; }
    .profile-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem; display: flex; gap: 2rem; align-items: center; }
    .avatar { width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; flex-shrink: 0; }
    .profile-info h1 { font-size: 2.5rem; margin: 0 0 0.5rem 0; }
    .role { font-size: 1.3rem; opacity: 0.95; margin: 0 0 1rem 0; }
    .status-badge { padding: 0.5rem 1.5rem; border-radius: 25px; font-weight: 600; color: white; }
    .status-badge.active { background: #4CAF50; }
    .status-badge.inactive { background: #f44336; }
    .status-badge.on-leave { background: #ff9800; } 
    .profile-body { padding: 3rem; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem; }
    .info-card h3 { color: #333; margin-bottom: 1rem; font-size: 1.3rem; }
    .salary { font-size: 2.2rem; color: #4CAF50; font-weight: bold; margin: 0 0 1rem 0; }
    .edit-section h3 { color: #333; margin-bottom: 1.5rem; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .form-input { padding: 1rem; border: 2px solid #f0f0f0; border-radius: 12px; font-size: 1rem; transition: border-color 0.3s; }
    .form-input:focus { outline: none; border-color: #667eea; }
    .save-btn { grid-column: span 2; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; padding: 1rem 2rem; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: transform 0.3s; }
    .save-btn:hover { transform: translateY(-2px); }
    @media (max-width: 768px) { .info-grid, .form-grid { grid-template-columns: 1fr; } .profile-header { flex-direction: column; text-align: center; } }
  `]
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = ALL_EMPLOYEES.find((e: Employee) => e.id === parseInt(id || '1')) || null;
  }

  getInitials(name: string): string { return name.split(' ').map(n => n[0]).join('').toUpperCase(); }
  getDeptColor(dept: string): string {
    const colors: { [key: string]: string } = { 'Engineering': '#667eea', 'Marketing': '#ff9800', 'HR': '#4CAF50', 'Sales': '#f44336', 'Finance': '#9C27B0' };
    return colors[dept] || '#667eea';
  }

  saveEmployee() {
    if (this.employee) {
      const index = ALL_EMPLOYEES.findIndex((e: Employee) => e.id === this.employee!.id);
      if (index !== -1) {
        ALL_EMPLOYEES[index] = { ...this.employee };
      }
      alert(`✅ Employee ${this.employee.name} updated successfully!\nName: ${this.employee.name}\nSalary: ₹${this.employee.salary.toLocaleString()}`);
    }
  }
}
