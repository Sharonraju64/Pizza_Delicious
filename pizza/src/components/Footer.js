import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <InstagramIcon />
            <FacebookIcon />
            <WhatsappIcon />
        </div>
        <p> &copy; 2023 PizzaDelicious.com</p>
    </div>
  );
}

export default Footer;