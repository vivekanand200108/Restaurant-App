import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}>
        <Box sx={{my:3,"& svg":{
          fontSize:"50px",
          marginLeft:"20px",
          cursor:"pointer",
        },"& svg:hover":{
          color:"goldenrod",
          transform:"translateX(5px)",
          transition:"all 400ms"
        }
        }}>
          <InstagramIcon />
          <TwitterIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
          {/* <FacebookIcon/> */}
        </Box>
        <Typography variant="h5" sx={{
          "@media(max-width:600px)": {
            fontSize: "1rem"
          }
        }}>
          All Rights Reserved &copy; Killer Resturant
        </Typography>
      </Box>
    </>
  )
}

export default Footer