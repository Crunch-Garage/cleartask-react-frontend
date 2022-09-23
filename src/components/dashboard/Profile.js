import React from 'react';


class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Profile')
    }
    
    render(){
        return(
            <p>Profile</p>
        )
    }
}

export default Profile;