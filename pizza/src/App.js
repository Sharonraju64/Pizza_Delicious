import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Menu from './pages/Users/Menu';
import Login from './pages/Login';
import Admin from './pages/admin/Admin';
import Userslist from './pages/admin/Userlist';
import Orderslist from './pages/admin/Orderlist';
import Pizzaslist from './pages/admin/Pizzalist';
import Baseslist from './pages/admin/Baselist';
import Addbases from './pages/admin/Addbases';
import Toppingslist from './pages/admin/Toppinglist';
import Addtopping from './pages/admin/Addtopping';
import Addpizza from './pages/admin/Addpizza';
import Editpizza from './pages/admin/Editpizza';
import Signup from './pages/Signup';
import Cart from './pages/cart/Cart';
import Myorders from './pages/Users/Myorders';
import Mypizza from './pages/Users/Mypizza'
import EmailVerify from './pages/Email/EmailVerify';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { setUserData } from './actions/Useractions';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	const dispatch = useDispatch();
	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			const url =
				'https://pizza-backend-50h0.onrender.comapi/auth/jwt/verify';
			axios
				.get(url, {
					params: {
						token
					}
				})
				.then((res) => {
					if (res.data.success) {
						if (res?.data?.userData?.role === 'admin') {
							setIsAdmin(true);
						}
						if (res?.data?.userData) {
							dispatch(setUserData(res.data.userData));
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
		  <Route path="api/user/:id/verify/:token" element={<EmailVerify/>}/>
          {user?.role && (
            <>
              <Route path="/menu" element={<Menu/>}/>
			  <Route path='/cart' element={<Cart/>}/>
			  <Route path='/orders' element={<Myorders/>}/>
			  <Route path='/mypizza' element={<Mypizza/>}/>
            </>
          )}
          {isAdmin &&(
            <>
		  <Route path="/admin" element={<Admin/>}/>
		  <Route path="/admin/userslist" element={<Userslist/>}/>
		  <Route path="/admin/orderlist" element={<Orderslist/>}/>
		  <Route path="/admin/pizzalist" element={<Pizzaslist/>}/>
		  <Route path='/admin/baselist' element={<Baseslist/>}/>
		  <Route path='/admin/addbases' element={<Addbases/>}/>
		  <Route path='/admin/toppinglist' element={<Toppingslist/>}/>
		  <Route path='/admin/addtopping' element={<Addtopping/>}/>
		  <Route path='/admin/addpizza' element={<Addpizza/>}/>
		  <Route path='/admin/editpizza' element={<Editpizza/>}/>
            </>
          )}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}




export default App;
