import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// component that handles where to take authenticated users

// const isAuthed = Boolean(localStorage.getItem("access_token"));

class AuthedRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn:true
    }
  }

  componentDidMount = () =>{
    console.log('here')
  }

  render(){
    return(
      <div>
        { this.state.loggedIn ? (
            <Outlet/>
            ) : (
            <Navigate to='/auth/login' replace={true}/>
            )
        }
      </div>
    )
  };
}

export default AuthedRoute;