import React from 'react';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";
import logo from '../assets/solid.png';

const axios = require('axios');
const baseURL = process.env.REACT_APP_BASEAPIURL || 'http://127.0.0.1:8000';

const SignUpNavbar = ()=>{
    return(
        <nav className='auth-nav'>
            <div className='wrapper'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <div className="right-menu">
                    <span>Already have an account?</span>
                    <Link to="/login"><button type="button">Login!</button></Link>
                </div>
            </div>
        </nav>
    )
}
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            firstname:"",
            lastname:"",
            email:"",
            password1:"",
            password2:"",
            authErrors:"",
            emailErrors:"",
            fullNameErrors:"",
            passwordErrors:""
        }

        this.handleChange =this.handleChange.bind(this);
    }

    // componentDidMount = () =>{ 
    // }

    // Form fields processing a user inputs their details.
    handleChange(object){
        // Update state as form field values change
        this.setState(object,()=> {
            // TO DO: Check if username already exists and generate a new random one 
            this.setState({username:this.state.email.substring(0, this.state.email.lastIndexOf("@"))}, () => console.log(this.state.username))
        });
    };

    registerUser = (e) => {
        e.preventDefault();
        console.log(baseURL)
        this.state.email && this.state.firstname && this.state.lastname ? (
            this.state.email ? (
                this.state.firstname && this.state.lastname ? (
                    axios({
                        method:'post',
                        url:`${baseURL}/apis/rest-auth/registration/`,
                        data: {
                            username: this.state.username,
                            firstname:this.state.firstname,
                            lastname:this.state.lastname,
                            password1:this.state.password1,
                            password2:this.state.password2,
                            email:this.state.email
                        },
                        config: {
                            headers: { "Content-Type": "application/json" }
                          }
                    })
                    .then(response => {

                        console.log(response);
                        // Store authorization tokens in local storage so we can use them to fire
                        // subsequent Api requests for the user.
                        // access token gives us access to server requests
                        localStorage.setItem("access_token", response.data.access_tokens.access);
                        // we will use the refresh token to get a new access token from the server when the initial one nears expiry
                        localStorage.setItem("refresh_token", response.data.access_tokens.refresh);

                        // redirect user to their dashboard
                        this.props.history.go("/workspace");
                    })
                    .catch(error =>{
                        console.log(error);
                    })

                ) : this.setState({fullNameErrors:"Please enter your first and last name"})

            ) : this.setState({emailErrors:"Please enter your email"})
        ) : this.setState({emailErrors:"Please enter your email",fullNameErrors:"Please enter your first and last name"})
    };

    render(){
        return(
            <Container className="formContainer">
                <Grid container spacing={3} className="formContainerGrid">
                    <Grid item xs>
                        <SignUpNavbar/>
                        <div className='authWrapper'>
                            <div className='authHead'>
                                <h2>Ready to get more done</h2>
                                <p>Create an account to begin</p>
                            </div>
                            <form onSubmit={this.registerUser}>
                            <span className={this.state.authErrors ? 'formErrors AuthError' : ''}>{this.state.authErrors}</span>
                                <input id='email' className={this.state.emailErrors ? 'fieldError' : ''} name='email' placeholder='jane.doe@email.com' onChange={(e)=> this.handleChange({email:e.target.value})} required></input>
                                <span className='formErrors'>{this.state.emailErrors}</span>
                                <div className="fullNames">
                                    <div className="fields">
                                        <input id='firstname' className={this.state.fullNameErrors ? 'fieldError' : ''} name='firstname' placeholder='Firstname' onChange={(e)=> this.handleChange({firstname:e.target.value})} required></input>
                                        <span style={{width:'10px'}}></span>
                                        <input id='lastname' className={this.state.fullNameErrors ? 'fieldError' : ''} name='lastname' placeholder='Lastname' onChange={(e)=> this.handleChange({lastname:e.target.value})} required></input>
                                    </div>
                                    <span className='formErrors'>{this.state.fullNameErrors}</span>
                                </div>
                                <div className='passwordField'>
                                    <input id='password1' type='password' className={this.state.passwordErrors ? 'fieldError' : ''} name='password1' placeholder='Enter your password' onChange={(e)=> this.handleChange({password1:e.target.value})} required></input>
                                    <input id='password2' type='password' className={this.state.passwordErrors ? 'fieldError' : ''} name='password2' placeholder='Confirm your password' onChange={(e)=> this.handleChange({password2:e.target.value})} required></input>
                                    <span className='formErrors'>{this.state.passwordErrors}</span>
                                </div>
                                <button type='submit'>Sign up</button>
                            </form>
                        </div>
                        <div className="formFooter">
                                <span> &copy;Cleartask {new Date().getFullYear()}</span>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="slideView"/>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}

export default Signup;