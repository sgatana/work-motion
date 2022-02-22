import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { getEmployees } from './api';
import FetchData from './components/FetchData';
import { Employee } from './interfaces/exployee';
import { Add, Group, Menu as MenuIcon } from '@mui/icons-material';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './components/AddEmployee';

const drawerWidth = 240;

const App = () => {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = (refreshing: boolean) => {
    setRefresh(refreshing);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Employees Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary='Employees' />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      <AddEmployee open={open} onClose={() => setOpen(false)} />

        <FetchData action={getEmployees} refresh={refresh}>
          {(data: Employee[]) => {
            return <EmployeeList employees={data} onRefresh={onRefresh} />;
          }}
        </FetchData>
        <Fab
          onClick={() => setOpen(true)}
          color='primary'
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
        >
          <Add />
        </Fab>
      </Box>
    </Box>
  );
};

export default App;
