import {
	Alert,
	AlertIcon,
	Spinner,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/Useractions';
import Admin from './Admin';

export default function Userslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);
	const userstate = useSelector((state) => state.getAllUsers);

	const { users, error, loading } = userstate;

	return (
		<>
            <Admin/>
			<Text fontSize='30px' textAlign='center' fontWeight='bold'>
				Users list
			</Text>
			{loading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}
			<TableContainer width='75%' margin='auto'>
				<Table variant='striped' colorScheme='gray' borderWidth='3px'>
					<TableCaption> Users List </TableCaption>
					<Thead>
						<Tr>
							<Th>UserName</Th>
							<Th>Email</Th>
							<Th>User Id</Th>
							<Th>Address</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users.map((user)=>(
							<Tr>
								<Td>{user.firstname} {user.lastname}</Td>
								<Td>{user.email}</Td>
								<Td>{user._id}</Td>
								<Td>{user.address}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}