import React from 'react';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from "react-router-dom";
import p1 from '../assets/p1.jpg';
import logo from '../assets/logo.png';

const axios = require('axios');
const baseURL = process.env.REACT_APP_BASEAPIURL || 'http://127.0.0.1:8080';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            identifier:"",
            password:"",
            passwordErrors:"",
            idErrors:"",
            authErrors:"",
        }

    }

    // Form fields processing a user inputs their details.
    handleChange = (object) => {
        // Update state as form field values change
        this.setState(object);
    };

    loginUser = (e) => {
        e.preventDefault();
        this.state.identifier ? (
            this.state.password ? (
                axios({
                    method:'post',
                    url:`${baseURL}/apis/api/token/`,
                    data: {
                        username: this.state.identifier,
                        password:this.state.password,
                    },
                    config: {
                        headers: { "Content-Type": "application/json" }
                        }
                })
                .then(response => {
                    // clear auth errors
                    this.setState({
                        authErrors:'',
                    })
                    // Store authorization tokens in local storage so we can use them to fire
                    // subsequent Api requests for the user.
                    // access token gives us access to server requests
                    localStorage.setItem("access_token", response.data.access);
                    // we will use the refresh token to get a new access token from the server when the initial one nears expiry
                    localStorage.setItem("refresh_token", response.data.refresh);
                })
                .catch(error =>{
                    error.response.status == '401' ? (
                        this.setState({
                            authErrors:`${error.response.data.detail}`
                        })
                    ) : (
                        this.setState({
                            authErrors:`Oops! Something went wrong. Try again later.`
                        })
                    )
                })
            ) : this.setState({passwordErrors:"This field is required"})
        ) : this.setState({idErrors:"This field is required"})
    };

    render(){
        return(
            <Container className="formContainer">
                <Grid container spacing={3} className="formContainerGrid">
                    <Grid item xs>
                        <div className='authWrapper'>
                            <div className='authHead'>
                                <div class="authHeadLogo">
                                    <img src={logo} alt=""/>
                                </div>
                                <h2>Glad to have you back</h2>
                                <p>Login to continue</p>
                            </div>
                            <form onSubmit={this.loginUser}>
                                <span className={this.state.authErrors ? 'formErrors AuthError' : ''}>{this.state.authErrors}</span>
                                <input id='identifier' className={this.state.idErrors ? 'fieldError' : ''} name='identifier' placeholder='Username,Email or Phone number' onChange={(e)=> this.handleChange({identifier:e.target.value})} required></input>
                                <span className='formErrors'>{this.state.idErrors}</span>
                                <input id='password' type='password' className={this.state.passwordErrors ? 'fieldError' : ''} name='password' placeholder='Enter your password' autoComplete='on' onChange={(e)=> this.handleChange({password:e.target.value})} required></input>
                                <span className='formErrors'>{this.state.passwordErrors}</span>
                                <button type='submit'>Login</button>
                                <div className="formFooter">
                                    <p>Don't have an account yet? <Link to="/signup">Sign up for free.</Link></p>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <AutoPlaySwipeableViews className="slideView">
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                        </AutoPlaySwipeableViews>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}

export default Login;