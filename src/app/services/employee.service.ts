import { Injectable } from '@angular/core';
import { Employee, ALL_EMPLOYEES } from '../models/employee';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>(ALL_EMPLOYEES);
  
  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return this.employees.asObservable();
  }

  getEmployee(id: number): Employee | null {
    return ALL_EMPLOYEES.find((e: Employee) => e.id === id) || null;
  }

  updateEmployee(employee: Employee): void {
    const index = ALL_EMPLOYEES.findIndex((e: Employee) => e.id === employee.id);
    if (index !== -1) {
      ALL_EMPLOYEES[index] = { ...employee };
      this.employees.next([...ALL_EMPLOYEES]);
    }
  }
}
