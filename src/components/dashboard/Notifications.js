import React from 'react';
import Sidebar from './Sidebar';

class Notifications extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Notifications')
    }
    
    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My Notifications</p>
                </div>
            </div>
        )
    }
}

export default Notifications;