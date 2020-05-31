import {combineReducers} from 'redux';
import LoginUserReducer from './LoginUserReducer';
import RegisterUserReducer from './RegisterUserReducer';
export default combineReducers({
    loginUser:LoginUserReducer,
    registerUser:RegisterUserReducer
})
