import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// component that handles where to take authenticated users

// const isAuthed = Boolean(localStorage.getItem("access_token"));

class UnauthedRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedOut:false
    }
  }

  componentDidMount = () =>{
    console.log('here')
  }

  render(){
    return(
      <div>
        { this.state.loggedOut ? (
            <Outlet/>
            ) : (
            <Navigate to='/dashboard/workspace' replace={true}/>
            )
        }
      </div>
    )
  };
}


export default UnauthedRoute;