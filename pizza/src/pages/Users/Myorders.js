import React from 'react';
import Usernav from '../../components/usernav';
import Order from '../cart/Order';
export default function CartScreen() {
	return (
		<div>
			<Usernav />
			<Order />
		</div>
	);
}