import {getLoggedInUserInfo} from '../../redux/reducers/authSlice'
import {login,logout}  from '../../redux/actions/Auth'
import {connect} from 'react-redux'
import { Login } from '../components/Login'
const mapStateToProps=(state:any)=>{
    const userDetails=  getLoggedInUserInfo(state)
    return {
        userDetails
    }
    
}
const mapDispatchToProps={
  login,
  logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)