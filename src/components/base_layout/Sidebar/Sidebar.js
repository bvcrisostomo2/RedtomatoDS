import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import logo from './../../../rtds-logo.svg';
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topMargin: 0,
            icon: 'search',
            leftMargin: '-1000px',
            backdrop: 'none'
        };
    }
    closeSideNav() {
        this.setState({leftMargin:'-1000px', backdrop: 'none'});
    }
    render() {
        return(
                <div>
                    <div className="sidebar-container">
                        <div className="sidenav-container">
                        <div className="sidenav-logo">
                            <Link to='/' ><img id="logo" alt="Logo" src={logo} /></Link>
                            <div className="inner-sidenav-item"></div>
                        </div>
                        <Link to='/about' className="sidenav-item">ABOUT</Link>
                        <Link to='/work' className="sidenav-item">PROJECTS</Link>
                        <Link to='/contact' className="sidenav-item">CONTACT</Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Sidebar;