import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './Header.css';

import logo from './../../../rtds-logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        //   topMargin: 0,
        //   icon: 'search',
        //   leftMargin: '100px',
        //   backdrop: 'none'
            icon: 'bars',
            display: 'none',
        };
    }
    closeMenu() {
        this.setState({display:'none', icon: 'bars'});
    }
    toggleMenu(status) {
        if(status === 'none') {
            this.setState({display: 'block', icon: 'cross'})
        } else {
            this.setState({display: 'none', icon: 'bars'})
        }
    }
    render() {
        return(
            <div className="header">
                <div className="header-container">
                    <Link to="/"><img id="logo" alt="Logo" src={logo} /></Link>
                    <div className="inner-header-center">
                        
                    </div>
                    <div className="inner-header-right">
                        <ul className="menu">
                            <Link to="/about"><li>ABOUT</li></Link>
                            <Link to="/work"><li>WORK</li></Link>
                            <Link to="/contact"><li>CONTACT</li></Link>
                        </ul>
                        <ul className="menu-button">
                            <li onClick={() => this.toggleMenu(this.state.display)}><Icon type={this.state.icon} style={{ fontSize: 30 }} className="cross"/></li>
                        </ul>
                    </div>
                    {/* <div className="inner-header-left">
                        <ul>
                            <li><span className="menu-button">Menu</span></li>
                        </ul> */}
                        {/* <Icon className="menu-button" type="bars" style={{ fontSize: 30 }} onClick={() => this.setState({leftMargin:'-100px', backdrop: 'block'})}/> */}
                        {/* <div className="backdrop" onClick={() => this.closeSideNav()} style={{display:this.state.backdrop}}></div>
                        <div className="sidenav-container" style={{marginLeft: this.state.leftMargin}}>
                            <div className="sidenav-item">
                                <div className="inner-sidenav-item"></div>
                                <div className="inner-sidenav-item" onClick={() => this.closeSideNav()}>
                                    <Icon type="cross" style={{ fontSize: 30 }} className="cross"/>
                                </div>
                            </div>
                            <Link to='/about' className="sidenav-item" onClick={() => this.closeSideNav()}>ABOUT</Link>
                            <Link to='/projects' className="sidenav-item" onClick={() => this.closeSideNav()}>SERVICES</Link>
                            <Link to='/projects' className="sidenav-item" onClick={() => this.closeSideNav()}>PROJECTS</Link>
                            <Link to='/contact' className="sidenav-item" onClick={() => this.closeSideNav()}>CONTACT</Link>
                        </div> */}
                    {/* </div> */}
                </div>
                <div className="mobile-menu" style={{display: this.state.display}}>
                    <ul>
                        <li style={{fontSize:'25px', textDecoration:'underline'}}>MENU</li>
                        <li><Link to='/' onClick={() => this.closeMenu()}>Home</Link></li>
                        <li><Link to='/about' onClick={() => this.closeMenu()}>About</Link></li>
                        <li><Link to='/work' onClick={() => this.closeMenu()}>Work</Link></li>
                        <li><Link to='/contact' onClick={() => this.closeMenu()}>Contact</Link></li>
                    </ul>
                </div>
                {/* <span className="sexy_line"></span> */}
            </div>
        );
    }
}

export default Header;