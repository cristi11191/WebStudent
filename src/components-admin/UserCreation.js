import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/styles.css';
import './css/usercreation.css';
import { fetchUsers } from '../services/apiService';



export default function BasicTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const data = await fetchUsers();
            setUsers(data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        getUsers();
      }, []);

  return (
    <TableContainer component={Paper} className='tableusers'>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-head'>
            <TableCell className='tabletext'>Id</TableCell>
            <TableCell align="right" className='tabletext'>Name</TableCell>
            <TableCell align="right" className='tabletext'>Email</TableCell>
            <TableCell align="right" className='tabletext'>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
            <TableRow
            key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='table-content'
            >
              <TableCell component="th" scope="row" className='tabletext'>{user.id}</TableCell>
              <TableCell align="right" className='tabletext'>{user.name}</TableCell>
              <TableCell align="right" className='tabletext'>{user.email}</TableCell>
              <TableCell align="right" className='tabletext'>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}