import React from 'react';


class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Tasks')
    }
    
    render(){
        return(
            <p>Tasks</p>
        )
    }
}

export default Tasks;