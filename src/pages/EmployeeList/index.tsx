import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { updateEmployee } from '../../api';
import { Employee } from '../../interfaces/exployee';

const columns = ['Name', 'Phone', 'Email', 'Country', 'Address', 'Status'];
const statuses = ['Added', 'In-Check', 'Approved', 'Active', 'Inactive'];

interface Props {
  employees: Employee[];
  onRefresh?: any;
}
const EmployeeList = ({ employees = [], onRefresh }: Props) => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);

  const onUpdateStatus = async (status: string, id: string) => {
    onRefresh(false);
    await updateEmployee({ status }, id);
    onRefresh(true);
  };


  useEffect(() => setEmployeeList(employees), [employees]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee) => (
            <TableRow hover key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.country}</TableCell>
              <TableCell>{employee.address}</TableCell>
              <TableCell>
                <span>
                  <Stack direction='row' spacing={2}>
                    {statuses.map((status) => (
                      <Button
                        onClick={() => onUpdateStatus(status, employee.id)}
                        variant='contained'
                        color={
                          status === employee.status ? 'primary' : 'inherit'
                        }
                        size='small'
                        key={status}
                      >
                        {status}
                      </Button>
                    ))}
                  </Stack>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
