import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Feedbackdashboard = () => {
    const navigate=useNavigate()
    const [feedback,setFeedback]=useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/feedback')
          .then((res) => {
            if (Array.isArray(res.data.data)) {
              setFeedback(res.data.data);
            } else {
              console.error('Unexpected response format:', res.data.data);
            }
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
          });
      }, []);
      function updateHandler(val){
        navigate('/add',{state:{val}})
          }
      const deleteHandler=(id)=>{
        axios.delete(`http://localhost:3000/feedback/delete/${id}`).then((res)=>{
          console.log(res.message);
          window.location.reload();
          })
        
        }


  return (
    <div>
     <Navbar></Navbar>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Duration</TableCell>
            <TableCell align="right">Overall Feedback rating</TableCell>
                      
          </TableRow>
        </TableHead>
        <TableBody>
        {feedback.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                             <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.coursename}</TableCell>
              <TableCell align="right">{row.courseduration}</TableCell>
              {/* <TableCell align="right">{row.feedbackcomment}</TableCell> */}
              <TableCell align="right">{row.rating}</TableCell>
               <Button variant='contained' color='secondary' style={{marginRight:'5px',marginBottom:'5px'}} onClick={()=>updateHandler(row)}>Update</Button>
              <Button variant='contained' color='error' style={{marginBottom:'5px'}} onClick={()=>deleteHandler(row._id)}>Delete</Button> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Feedbackdashboard
