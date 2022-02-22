import { EmployeeDetails } from '../interfaces/EmployeeDetails';
import { Employee } from '../interfaces/exployee';
import { employees } from '../models/db';


// POST
export const getEmployees = async () => {
  return Promise.resolve(employees);
};

// GET
export const addEmployee = (employee: Employee) => {
  employees.push(employee);
  return Promise.resolve({ message: 'success' });
};

// PATCH
export const updateEmployee = (details: EmployeeDetails, id: string) => {
  const emp = employees.map((employee: Employee) => {
    if (employee.id === id) {
      employee = { ...employee, ...details };
    }
    return employee;
  });
  employees.splice(0, employees.length, ...emp);
  return Promise.resolve(employees);
};