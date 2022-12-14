import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log:''
        }
    }

    render(){
        return(
            <>
            <Header/>
            <div className="homePage">
                <div className="contBox">
                    <h2>Welcome to Cleartask</h2>
                    <p>Clear more tasks off your to do list. Get more work done! It's that simple. </p>

                    <div className="QuickLinks">
                        <Link to="/dashboard/workspace/"><button type="button">Go to my clearboard</button></Link>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default Home;