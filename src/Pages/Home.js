import React from 'react'
import Layout from '../Components/Layout/Layout'
import Banner from "../Images/banner.jpeg"
import "../Style/HomeStyle.css"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  // const notify = () => toast("Wow so easy!");
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="homeContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to={"/menu"}>
            <Button variant="contained" color="warning" sx={{ mb: 2 }} /*onClick={notify}*/>
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home