import React from 'react';


class Inbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Inbox')
    }
    
    render(){
        return(
            <p>Inbox</p>
        )
    }
}

export default Inbox;