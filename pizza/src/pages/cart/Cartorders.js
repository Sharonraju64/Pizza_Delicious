import {
	Box,
	Button,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../actions/Cartactions';
export default function CartOrders({ item }) {
	const dispatch = useDispatch();
	return (
		<Box
			width='60%'
			display='flex'
			border='1px'
			borderColor='#b33030'
			borderRadius='25px'
			padding='27px'
			marginRight='10px'
			marginBottom='20px'
		>
			<VStack alignItems='flex-start'>
				<HStack>
					<Text fontSize='2xl'>{item.name}</Text>
					<Text fontSize='1xl'>[{item.varient}]</Text>
				</HStack>
				<Text fontSize='1xl'>Price :{item.price}</Text>
				<HStack>
					<Text fontSize='1xl'>Quantity :</Text>
					<b>{item.quantity}</b>
				</HStack>
				<Text fontSize='1xl'>Description : {item.description}</Text>
			</VStack>

			<Spacer />
			<HStack marginRight='30px'>
				<Image
					src={item.image}
					width='100px'
					height='100px'
					marginRight='75px'
				/>
				<Button
					onClick={() => {
						dispatch(deleteFromCart(item));
					}}
					size='small'
				>
				</Button>
			</HStack>
		</Box>
	);
}