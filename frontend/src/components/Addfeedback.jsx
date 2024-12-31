import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const Addfeedback = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [form,setForm]=useState({
        coursename:'',
        feedbackcomment:'',
        rating:''
      
       })

       useEffect((val)=>{
        if(location.state!=null){
      setForm({...form, coursename:location.state.val.coursename,feedbackcomment:location.state.val.feedbackcomment,rating:location.state.val.rating
      })
        }
        else{
          setForm({...form,coursename:'',feedbackcomment:''})
        }
      },[])

     


       const inputHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        }
        // const addHandler=()=>{
        //     console.log(form)
        //     axios.post('http://localhost:3000/feedback/add',form)
        //     .then((res)=>{
        // console.log(res.message)
        //     })
        //     .catch((err)=>{
        //       console.log(err)
        //     })
            
        //   }
        const addHandler=()=>{
            if(location.state!=null){
              // axios.put(`http://localhost:3000/blog/edit`+location.state.val._id,form).then((res)=>{//this statement will cause error in the code always append id wilth the url
                axios.put(`http://localhost:3000/feedback/edit/${location.state.val._id}`,form).then((res)=>{
                alert(res.data.message)
                // console.log(res.data)
                navigate('/')
              }).catch((err)=>{
          console.log(err)
              })
            }
          
            else{
          axios.post('http://localhost:3000/feedback/add',form).then((res)=>{
            // alert(res.data)
            console.log(res.data.data)
            navigate('/');
          }).catch((err)=>{
          console.log(err)
            })
          
          
            }}

  return (
    <div>
        <Navbar></Navbar>
     <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%',width:'50%',marginLeft:'20%'}}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField fullWidth id="title" label="coursename" name='coursename' value={form.coursename} onChange={inputHandler} variant='outlined'/>
        </Grid> 
        <Grid size={12}>
        <TextField fullWidth id="image" label="feedback comment" name='feedbackcomment' value={form.feedbackcomment} onChange={inputHandler} variant='outlined'/>
        </Grid>
       
         <Grid size={12}>
        <TextField fullWidth id="image" label="feedback rating" name='rating' value={form.rating} onChange={inputHandler} variant='outlined'/>
        </Grid>
       
       <Grid size={12}>
    
       <Button variant='contained' onClick={addHandler}>Add</Button>
       </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Addfeedback
