import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
	dispatch({ type: 'GET_PIZZAS_REQUEST' });

	try {
		const response = await axios.get(
			'https://pizza-backend-50h0.onrender.com/api/pizza/getallpizzas',
		);
		// console.log(response);
		dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_PIZZAS_FAILED', payload: error });
	}
};

export const addPizza = (pizza) => async (dispatch) => {
	dispatch({ type: 'ADD_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'https://pizza-backend-50h0.onrender.com/api/pizza/addpizza',
			{ pizza: pizza },
		);
		console.log(response);
		dispatch({ type: 'ADD_PIZZA_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
	}
};

//get pizza by id
export const getPizzaById = (pizzaid) => async (dispatch) => {
	dispatch({ type: 'GET_PIZZA_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'https://pizza-backend-50h0.onrender.com/api/pizza/getpizzabyid',
			{ pizzaid: pizzaid },
		);
		console.log(response);
		dispatch({ type: 'GET_PIZZA_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_PIZZA_BY_ID_FAILED', payload: error });
	}
};

//update pizza
export const updatePizza = (updatedPizza) => async (dispatch) => {
	dispatch({ type: 'UPDATE_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'https://pizza-backend-50h0.onrender.com/api/pizza/updatepizza',
			{ updatedPizza: updatedPizza },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_PIZZA_SUCCESS' });
		window.location.href = '/admin/pizzaslist';
	} catch (error) {
		dispatch({ type: 'UPDATE_PIZZA_FAILED', payload: error });
	}
};

//delete pizza
export const deletePizza = (pizzaid) => async (dispatch) => {
	dispatch({ type: 'DELETE_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'https://pizza-backend-50h0.onrender.com/api/pizza/deletepizza',
			{ pizzaid: pizzaid },
		);
		console.log(response);
		alert('Pizza deleted successfully');
		dispatch({ type: 'DELETE_PIZZA_SUCCESS' });
		window.location.reload();
	} catch (error) {
		dispatch({ type: 'DELETE_PIZZA_FAILED', payload: error });
	}
};