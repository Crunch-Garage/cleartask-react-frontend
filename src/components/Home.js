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
            <div className="homePage">
                <div className="contBox">
                    <h2>Welcome to Cleartask</h2>
                    <p>Clear more tasks off your to do list. Get more work done! It's that simple. </p>

                    <div className="QuickLinks">
                        <a href="/dashboard/workspace/"><button type="button">Go to my clearboard</button></a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;