import React from "react";
import './Header.css';
import logo from '../assets/solid.png';

const MainMenu = ()=>{
    const [dropdown, setDropdown] = React.useState({
        drop1:"hidden",
        drop2:"hidden",
        drop3:"hidden",
        drop4:"hidden"
    })

    const dropArrayCopy = () =>{
        let keys = ["drop1", "drop2", "drop3", "drop4"]
        let arrayCopy = {
            ...Object.fromEntries(keys.map(key => [key,'hidden']))
        }

        return arrayCopy
    }

    const onMenuItemMouseIn = (e) =>{
        // reset to defaults of hidden and update the value of current dropdown 
        let arrayCopy = dropArrayCopy()
        arrayCopy[e.target.getAttribute("data-targetItem")]= "block"
        setDropdown(arrayCopy)
    }

    const onMenuItemMouseOut = (e) =>{
        // reset all values to hidden
        let arrayCopy = dropArrayCopy()
        setDropdown(arrayCopy)
    }
    return(
        <div className="full-menu-bar-main">
            <div className="fmb-logo-Wrapper">
                <img src={logo} alt="cleartask"/>
            </div>
            <div className="fmb-menu-list-wrapper">
                <ul className="fmb-menu-list">
                    <li>
                        <button type="button" data-targetItem="drop1" onMouseEnter={onMenuItemMouseIn} aria-current="page">
                            Features
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {/* Navbar dropdown menu */}
                        <div className={`${dropdown.drop1} fmb-dropdown-box`  }>
                            <div className="fmb-dropdown-row">
                                <div className="fmb-dropdown-links">
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <span className="head">Analytics</span>
                                                <p className="body">Get a better understanding of where your traffic is coming from.</p>
                                            </div>
                                        </div>
                                    </a>
            
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <p className="head">Engagement</p>
                                                <p className="body">Speak directly to your customers in a more meaningful way.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <p className="head">Automations</p>
                                                <p className="body">Build strategic funnels that will drive your customers to convert</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-targetItem="drop2">
                        <button type="button" data-targetItem="drop2" onMouseEnter={onMenuItemMouseIn} aria-current="page">
                            Solutions
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {/* Navbar dropdown menu */}
                        <div className={`${dropdown.drop1} fmb-dropdown-box`  }>
                            <div className="fmb-dropdown-row">
                                <div className="fmb-dropdown-links">
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <span className="head">Analytics2</span>
                                                <p className="body">Get a better understanding of where your traffic is coming from.</p>
                                            </div>
                                        </div>
                                    </a>
            
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <p className="head">Engagement2</p>
                                                <p className="body">Speak directly to your customers in a more meaningful way.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="link-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                                            </svg>
                                            <div className="dropdown-link-text">
                                                <p className="head">Automations2</p>
                                                <p className="body">Build strategic funnels that will drive your customers to convert</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-targetItem="drop3"><a href="#" onMouseEnter={onMenuItemMouseOut}>Plans</a></li>
                    <li data-targetItem="drop4"><a href="#" onMouseEnter={onMenuItemMouseOut}>Pricing</a></li>
                </ul>
            </div>
        </div>
    )
}

const SecondaryMenu = ()=> {
    return(
        <div className="full-menu-bar-secondary">
            <ul>
                <li>
                    <button type="button">Login</button>
                </li>
                <li>
                    <button type="button">Get started</button>
                </li>
            </ul>
            {/* <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </button>
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </button>
            <div className="profile-tab">
                <div>
                    <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </button>
                </div>
                <div style={{"display":"none"}} className="profile-tab-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
            </div> */}
        </div>
    )
}

function Header(){
    
    return(
        <>
            <nav className="navbar" >
                <div className="full-menu">
                    <div className="nav-menu-items">
                        <div className="mobile-menu-trigger" style={{'display':"none"}}>
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="mobile-menu-trigger-button" aria-controls="mobile-menu" aria-expanded="false">
                                <span>Open main menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <MainMenu/>
                        <SecondaryMenu/>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div id="mobile-menu" style={{display:"none"}}>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                    <a href="#" aria-current="page">Dashboard</a>

                    <a href="#">Team</a>

                    <a href="#">Projects</a>

                    <a href="#">Calendar</a>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header;