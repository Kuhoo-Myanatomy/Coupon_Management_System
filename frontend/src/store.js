import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import couponReducer from'./redux/reducers/coupon';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const initialState={}

const store=createStore(couponReducer,applyMiddleware(thunk));

// const store=createStore(reducers,initialState);
// const store=createStore(rootReducer,initialState);
// const store=createStore(rootReducer,composeWithDevTools());

export default store;