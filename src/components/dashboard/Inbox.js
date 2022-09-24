import React from 'react';
import Sidebar from './Sidebar';

class Inbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Inbox')
    }
    
    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My Inbox</p>
                </div>
            </div>
        )
    }
}

export default Inbox;