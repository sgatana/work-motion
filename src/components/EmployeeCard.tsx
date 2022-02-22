import React from 'react';
import { Employee } from '../interfaces/exployee';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

const EmployeeCard: React.FC<Employee> = ({
  name,
  country,
  phone,
  email,
  address,
  status,
  id,
}) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText>{name}</ListItemText>
        <ListItemText>{country}</ListItemText>
        <ListItemText>{email}</ListItemText>
        <ListItemText>{address}</ListItemText>
        <ListItemText>{phone}</ListItemText>
        <ListItemText>{email}</ListItemText>
        <ListItemText>{status}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default EmployeeCard;
