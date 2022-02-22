import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { addEmployee } from '../api';
import { Employee } from '../interfaces/exployee';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddEmployee: React.FC<Props> = ({ open, onClose }) => {
  const [employee, setEmployee] = useState<Employee>({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    status: 'Added',
    id: new Date().getUTCMilliseconds()?.toString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onAddEmployee = async () => {
    await addEmployee(employee);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          '& .MuiTextField-root': { m: 1 },
        }}
      >
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Add Employee
        </Typography>
        <TextField
          name='name'
          label='Name'
          maxRows={4}
          placeholder='Name'
          value={employee.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name='email'
          label='Email'
          type='email'
          placeholder='Email'
          value={employee.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name='phone'
          label='Phone'
          type='phone'
          placeholder='Phone'
          value={employee.phone}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name='address'
          label='Address'
          placeholder='Address'
          value={employee.address}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name='country'
          label='Country'
          placeholder='Country'
          value={employee.country}
          onChange={handleChange}
          fullWidth
        />
        <Stack
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
          direction='row'
          spacing={2}
        >
          <Button onClick={onAddEmployee} variant='outlined' color='primary'>
            Add
          </Button>
          <Button onClick={onClose} color='inherit'>
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddEmployee;
