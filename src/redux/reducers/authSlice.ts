import { AccountInfo } from '@azure/msal-browser';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store'
export interface UserAccountInfo{
    accountDetails:AccountInfo|null
}

const initialState:UserAccountInfo={
    accountDetails:null
}

const authSlice=createSlice({
    name:'userAccount',
    initialState,
    reducers:{
login:(state,action:PayloadAction<AccountInfo>)=>{
    state.accountDetails=action.payload
},
logout:(state)=>{
    state.accountDetails=null
}
    }
})

export const getLoggedInUserInfo=(state:RootState)=>state?.user?.accountDetails||null

export default authSlice.reducer;