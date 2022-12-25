import React from "react";
import "./Home.css";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log:''
        }
    }

    render(){
        return(
            <div>
            <p>Homepage</p>

            <div className="QuickLinks">
                <a href="/dashboard/workspace/"><button type="button">My dashboard</button></a>
            </div>
            </div>
        )
    }
}


export default Home;