import {combineReducers} from 'redux';
import userReducer from './user';
import couponReducer from './coupon';

export default combineReducers({
     // users: userReducer,
     coupons: couponReducer
});