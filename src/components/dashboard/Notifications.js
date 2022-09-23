import React from 'react';


class Notifications extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Notifications')
    }
    
    render(){
        return(
            <p>Notifications</p>
        )
    }
}

export default Notifications;