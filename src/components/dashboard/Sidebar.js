import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { Icon } from '@iconify/react';

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
                            className="sideLink"
                            to="/dashboard/workspace"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:view-dashboard" />
                            Workspace
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/inbox"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:email-open" />
                            Inbox
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/notifications"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:bell" />
                            Notifications
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/profile"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:account" />
                            Profile
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/projects"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:folder-multiple" />
                            Projects
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/settings"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:cog" />
                            Settings
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/tasks"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:sitemap" />
                            Tasks
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;