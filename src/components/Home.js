import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log:''
        }
    }

    render(){
        return(
            <p>Homepage</p>
        )
    }
}


export default Home;