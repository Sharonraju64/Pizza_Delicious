import React from 'react';
import Logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Usernav.css';
function Usernav() {
    const cartstate = useSelector((state) => state.cart);
	//const userstate = useSelector((state) => state.setUserData);
	//const user = userstate.userData;

	function handleLogout() {
		localStorage.removeItem('cartItems');
		localStorage.removeItem('token');
		window.location.replace('/');
	}

	return (
        <div className='navbar'>
            <div className='navbar-img'>
                <img src={Logo} alt='Delicious Pizza'/>
            </div>
            <div className='r3'>

                <Link to='/orders'>My orders</Link>
                <button on onClick={handleLogout}>
                    <Link to='/'>Logout</Link>
                </button>
                <Link to='/cart'>
					Cart : {cartstate?.cartItems?.length}
				</Link>
            </div>
        </div>
    );
}

export default Usernav