import React from 'react';


class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Projects')
    }
    
    render(){
        return(
            <p>Projects</p>
        )
    }
}

export default Projects;