import React from "react";
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header"


const GetStartedInput = ()=>{
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} method="post">
            <input type="email" placeholder="Enter your email"/>
            <div className="cta">
                <button type="submit">Get started</button>
                <span>Free forever!<br/> No credit card</span>
            </div>
        </form>
    )
}

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
                    <Container>
                        <Grid container spacing={3} className="heroGrid">
                            <Grid item xs className="gridLeft gridText">
                                <h2>All your projects & tasks in one place!</h2>
                                <p>Get more productive. Get clear!</p>
                                <GetStartedInput/>
                            </Grid>
                            <Grid item xs>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
            </>
        )
    }
}


export default Home;