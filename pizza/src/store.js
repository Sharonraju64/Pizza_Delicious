import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducer/Cartreducer';
import { 
    getAllUsersReducer, 
    setUserDataReducer 
} from './reducer/Userreducer';
import {
    getAllPizzasReducer,
    addPizzaReducer,
    getPizzaByIdReducer,
    updatePizzaReducer
} from './reducer/Pizzareducer'
import { 
    placeOrderReducer,
    getUserOrdersReducer,
    getAllOrdersReducer,
    deliverOrderReducer
 } from './reducer/Orderreducer';
 import {
    getAllBasesReducer,
    getAllSaucesReducer,
    getAllToppingsReducer,
    getAllCheeseReducer,
    addBaseReducer,
    getBaseByIdReducer,
    updateBaseReducer,
    addToppingReducer,
    getToppingByIdReducer,
    updateToppingReducer
} from './reducer/Mypizzareducer'
const composeEnhancers = composeWithDevTools({});
const finalreducer = combineReducers({
    getAllUsers: getAllUsersReducer,
	setUserData: setUserDataReducer,
    getAllPizzas: getAllPizzasReducer,
    addPizza: addPizzaReducer,
    getPizzaById: getPizzaByIdReducer,
    updatePizza: updatePizzaReducer,
    cart: cartReducer,
    placeOrder: placeOrderReducer,
    getAllOrders: getAllOrdersReducer,
    getUserOrders: getUserOrdersReducer,
    deliverOrder: deliverOrderReducer,
    getAllBases: getAllBasesReducer,
    getAllSauces: getAllSaucesReducer,
    getAllToppings: getAllToppingsReducer,
    getAllCheese: getAllCheeseReducer,
    addBase:addBaseReducer,
    getBaseById: getBaseByIdReducer,
    updateBase: updateBaseReducer,
    addTopping: addToppingReducer,
    getToppingById: getToppingByIdReducer,
    updateTopping: updateToppingReducer,
});

const store = createStore(
    finalreducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;