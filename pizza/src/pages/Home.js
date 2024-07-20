//import { Link } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BG from '../assets/bg.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div>
      <Navbar/>
      <div className='home'style={{ backgroundImage: `url(${BG})`}}>
          <div className='header'>
              <h1>Pizza Delicious</h1>
              <p>Keep your friends close & your pizza closer</p>
              <Link to="/Menu">
                  <button> ORDER NOW </button>
              </Link>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;