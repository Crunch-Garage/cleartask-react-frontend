import React from 'react';
import Sidebar from './Sidebar';

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Settings')
    }
    
    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My Settings</p>
                </div>
            </div>
        )
    }
}

export default Settings;