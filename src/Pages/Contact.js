import React from 'react'
import Layout from '../Components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
        <Box sx={{mt:2,mb:5,ml:10,"& h4":{fontWeight:"bold"},"@media (max-width:600px)":{"& h4":{fontSize:"20px",mt:4}}}}>
          <Typography variant="h4">
            Contact to My Resturant
          </Typography>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse mollitia rem, facilis quisquam atque libero fugiat? Saepe, quisquam excepturi consequatur ex, praesentium reprehenderit quis mollitia in fugiat asperiores perferendis iste dolor eius odit omnis rerum consectetur ratione commodi sapiente illum veniam.
          </p>
        </Box>
        <Box sx={{m:3}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white",fontSize:"20px"}} align="center">Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:"red",pt:2}}/> 1800-00-000 (Tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{color:"skyblue",pt:1}}/> help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{color:"green",pt:1}}/> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact