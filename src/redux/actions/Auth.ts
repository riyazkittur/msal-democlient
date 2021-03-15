import  {AuthModule}  from './../../auth/AuthModule'; 
export const LOGIN="userAccount/login";
export const LOGOUT="userAccount/logout";
// export const GENERATE_TOKEN="GENERATE_TOKEN"

const authModule: AuthModule = new AuthModule();


export const login=()=>async (dispatch:Function)=>{
    await authModule.login("loginPopup");
dispatch({type:LOGIN,payload:authModule.account})
}
export const logout=()=>async (dispatch:Function)=>{
    dispatch({type:LOGOUT})
    authModule.logout();
}
    