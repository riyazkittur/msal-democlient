import authSlice from './reducers/authSlice';
import {combineReducers} from '@reduxjs/toolkit'

export default combineReducers({
    user:authSlice
})