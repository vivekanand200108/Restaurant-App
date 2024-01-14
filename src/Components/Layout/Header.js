
import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "../../Style/Headerstyle.css";
import Logo from "../../Images/logo.svg"
const Header = () => {
  const [mobileopen, setMobileopen] = useState(false)
  // handal drawer
  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen)
  }
  // menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={'goldenrod'} variant="h6" component={"div"} sx={{ flexGrow: 1,my:2 }}>
      <img src={Logo} alt="altLogo" height={"70"} width={"150px"} />
      </Typography>
      <Divider/>
        <ul className='mob-navbar'>
          <li>
            <NavLink activeClassName="active" to={"/"}>Home</NavLink >
          </li>
          <li>
            <NavLink  to={"/menu"}>Menu</NavLink >
          </li>
          <li>
            <NavLink  to={"/about"}>About</NavLink >
          </li>
          <li>
            <NavLink  to={"/contact"}>Contact</NavLink >
          </li>
        </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label="open drawer" 
            edge="start"
            onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="altLogo" height={"70"} width={"200px"} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navbar'>
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle}
          sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{
            boxSizing:"border-box",width:"200px",
          },}}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header