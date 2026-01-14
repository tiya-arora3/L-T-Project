import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.components';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '/employees' }
];
