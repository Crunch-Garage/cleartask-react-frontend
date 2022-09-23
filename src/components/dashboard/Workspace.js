import React from 'react';


class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('workspace')
    }
    
    render(){
        return(
            <p>My workspace</p>
        )
    }
}

export default Workspace;