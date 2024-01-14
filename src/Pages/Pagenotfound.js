import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box } from '@mui/material'

const Pagenotfound = () => {
  return (
    <Layout>
      <Box sx={{backgroundColor:"burlywood",height:"100vh", mt:-1}}>
      <h1 style={{fontFamily:"cursive",fontWeight:"bolder",textAlign:"center",fontSize:"100px",marginTop:"-8px"}}>404 ERROR PAGE</h1>
      <h1 style={{textAlign:"center",fontSize:"100px"}}>😍</h1>
        <p style={{fontFamily:"cursive",fontWeight:"bolder",textAlign:"center",fontSize:"70px"}}>Sorry, This page is does't exist.</p>
      </Box>
       
    </Layout>
  )
}

export default Pagenotfound