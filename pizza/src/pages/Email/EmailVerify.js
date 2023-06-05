import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import success from './success.png';
import './Email.css';

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState();
	const { id, token } = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try{
				const url = `http://localhost:5000/api/user/${id}/verify/${token}`;
				const { data } = await axios.get(url);
				console.log(data);
				if (data?.success) {
					alert(data?.message);
					setValidUrl(true);
				} else{
					setValidUrl(false);
				}
			}catch (error) {
				setValidUrl(false);
				console.log(error);
			}
		};
		verifyEmailUrl();
	}, [id, token]);

	return (
		<Fragment>
			{validUrl ? (
				<div className="container">
					<img
						src={success}
						alt='success_img'
						className="success_img"
					/>
					<h1>Email verified successfully</h1>
					<Link to='/login'>
						<button className="green_btn">Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;