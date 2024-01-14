import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../Data/Data'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{mt:1,display:"flex",flexWrap:"wrap",justifyContent:"center","@media (max-width:600px)":{mt:2}}}>
          {
            MenuList.map(menu =>(
              <Card sx={{maxWidth:"380px",display:"flex",m:2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:300}} component={'img'} src={menu.image} alt={menu.name}/>
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant="body1">
                      {menu.description}
                    </Typography>
                    <Typography variant="body1">
                    ₹{menu.price}.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
  )
}

export default Menu