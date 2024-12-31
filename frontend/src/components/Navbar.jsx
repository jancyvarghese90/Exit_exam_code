import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Feedback Dashboard
          </Typography>
          <Link to={'/'} style={{color:'white'}}><Button color="inherit" >
         Dashboard</Button></Link>
         <Link to={'/add'} style={{color:'white'}}> <Button color="inherit"         
             
          >Add Feedback</Button></Link>
       
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
