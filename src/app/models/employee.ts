export interface Employee {
  id: number; name: string; email: string; phone: string;
  department: string; role: string; salary: number; 
  hireDate: string; status: 'Active'|'Inactive'|'On Leave';
}

export type Department = 'Engineering' | 'Marketing' | 'HR' | 'Sales' | 'Finance';

export const ALL_EMPLOYEES: Employee[] = [
  { id: 1, name: 'John Doe', email: 'john@company.com', phone: '+1-555-0101', department: 'Engineering', role: 'Senior Developer', salary: 95000, hireDate: '2023-01-15', status: 'Active' },
  { id: 6, name: 'Emily Davis', email: 'emily@company.com', phone: '+1-555-0106', department: 'Engineering', role: 'Frontend Developer', salary: 78000, hireDate: '2024-02-01', status: 'Active' },
  { id: 7, name: 'Robert Garcia', email: 'robert@company.com', phone: '+1-555-0107', department: 'Engineering', role: 'DevOps Engineer', salary: 88000, hireDate: '2023-05-10', status: 'Active' },
  { id: 11, name: 'Priya Sharma', email: 'priya@company.com', phone: '+1-555-0111', department: 'Engineering', role: 'Backend Developer', salary: 82000, hireDate: '2024-01-20', status: 'Active' },
  { id: 15, name: 'Alex Kim', email: 'alex@company.com', phone: '+1-555-0115', department: 'Engineering', role: 'QA Engineer', salary: 68000, hireDate: '2024-03-10', status: 'On Leave' },
  { id: 18, name: 'Liam Chen', email: 'liam@company.com', phone: '+1-555-0118', department: 'Engineering', role: 'Full Stack Developer', salary: 90000, hireDate: '2023-12-05', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@company.com', phone: '+1-555-0102', department: 'Marketing', role: 'Marketing Manager', salary: 85000, hireDate: '2022-06-10', status: 'Active' },
  { id: 8, name: 'Lisa Chen', email: 'lisa@company.com', phone: '+1-555-0108', department: 'Marketing', role: 'Social Media Manager', salary: 68000, hireDate: '2024-01-15', status: 'Active' },
  { id: 12, name: 'Rahul Mehta', email: 'rahul@company.com', phone: '+1-555-0112', department: 'Marketing', role: 'Content Writer', salary: 62000, hireDate: '2023-11-05', status: 'Inactive' },
  { id: 19, name: 'Aisha Khan', email: 'aisha@company.com', phone: '+1-555-0119', department: 'Marketing', role: 'SEO Specialist', salary: 71000, hireDate: '2024-04-01', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@company.com', phone: '+1-555-0103', department: 'HR', role: 'HR Specialist', salary: 65000, hireDate: '2023-03-20', status: 'On Leave' },
  { id: 10, name: 'Maria Rodriguez', email: 'maria@company.com', phone: '+1-555-0110', department: 'HR', role: 'Talent Acquisition', salary: 67000, hireDate: '2024-03-01', status: 'Active' },
  { id: 14, name: 'Sophie Laurent', email: 'sophie@company.com', phone: '+1-555-0114', department: 'HR', role: 'Payroll Specialist', salary: 59000, hireDate: '2023-09-15', status: 'Active' },
  { id: 17, name: 'Kevin Patel', email: 'kevin@company.com', phone: '+1-555-0117', department: 'HR', role: 'Employee Relations', salary: 63000, hireDate: '2023-10-20', status: 'Active' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@company.com', phone: '+1-555-0104', department: 'Sales', role: 'Sales Executive', salary: 70000, hireDate: '2022-11-05', status: 'Inactive' },
  { id: 9, name: 'James Patel', email: 'james@company.com', phone: '+1-555-0109', department: 'Sales', role: 'Account Manager', salary: 75000, hireDate: '2023-07-20', status: 'Active' },
  { id: 13, name: 'Carlos Lopez', email: 'carlos@company.com', phone: '+1-555-0113', department: 'Sales', role: 'Sales Representative', salary: 64000, hireDate: '2024-02-15', status: 'Active' },
  { id: 16, name: 'Emma Thompson', email: 'emma@company.com', phone: '+1-555-0116', department: 'Sales', role: 'Business Development', salary: 78000, hireDate: '2024-01-10', status: 'Active' },
  { id: 5, name: 'David Brown', email: 'david@company.com', phone: '+1-555-0105', department: 'Finance', role: 'Accountant', salary: 72000, hireDate: '2023-08-12', status: 'Active' },
  { id: 20, name: 'Rachel Lee', email: 'rachel@company.com', phone: '+1-555-0120', department: 'Finance', role: 'Financial Analyst', salary: 74000, hireDate: '2024-02-28', status: 'Active' }
];
