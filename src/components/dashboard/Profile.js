import React from 'react';
import Sidebar from './Sidebar';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Profile')
    }
    
    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My profile</p>
                </div>
            </div>
        )
    }
}

export default Profile;