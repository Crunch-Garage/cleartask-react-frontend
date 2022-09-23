import React from 'react';


class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Settings')
    }
    
    render(){
        return(
            <p>Settings</p>
        )
    }
}

export default Settings;