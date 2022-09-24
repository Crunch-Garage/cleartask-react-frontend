import React from 'react';
import Sidebar from './Sidebar';
import "./Styles.css";

class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('workspace')
    }

    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My workspace</p>
                </div>
            </div>
          
        )
    }
}

export default Workspace;