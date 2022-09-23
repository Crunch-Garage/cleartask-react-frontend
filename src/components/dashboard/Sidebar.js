import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

// This styling will be applied to a <NavLink> when the
// route that it links to is currently selected.
let activeStyle = {
    textDecoration: "underline",
};

let activeClassName = "underline";


class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="dashMainSideNav">
                <nav>
                    <ul>
                        <li>
                        <NavLink
                            to="/dashboard/workspace"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Workspace
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/dashboard/inbox"
                            className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                            }
                        >
                            Inbox
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard/notifications">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Notifications
                            </span>
                            )}
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard/profile">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Profile
                            </span>
                            )}
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard/projects">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Projects
                            </span>
                            )}
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard/settings">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Settings
                            </span>
                            )}
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard/tasks">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Tasks
                            </span>
                            )}
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;