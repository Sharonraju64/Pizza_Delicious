import React,{useState} from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggle = () =>{
        setOpenLinks(!openLinks);
    }
    return (
        <div className='navbar'>
            <div className='left' id={openLinks?"open" : "close"}>
                <img src={Logo} alt="Pizza Delicious" />
                <div className='hide'>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div className='right'>
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <button onClick={toggle}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;