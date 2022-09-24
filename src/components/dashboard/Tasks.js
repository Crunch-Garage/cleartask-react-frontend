import React from 'react';
import Sidebar from './Sidebar';

class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Tasks')
    }
    
    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className="dashContent">
                    <p>My Tasks</p>
                </div>
            </div>       
        )
    }
}

export default Tasks;