import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './appLayout.css';

// import menus from '../../utils/menu';

// import components
import Header from '../base_layout/Header/Header';
// // import Sidebar from '../base_layout/Sidebar/Sidebar';
// import AppBreadcrumb from '../base_layout/AppBreadcrumb';
import AppFooter from '../base_layout/AppFooter';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import omg from '../pages/work/omg';
import mashiso from '../pages/work/mashiso';
import mck from '../pages/work/mck';
import jessa18 from '../pages/work/jessa18';
import pwdo from '../pages/work/pwdo';
import ProjectDetail from '../pages/ProjectDetail';
import ContactPage from '../pages/ContactPage';
import NoMatch from '../NoMatch/NoMatch';

// import logo from './../../rtds-logo.svg';

// const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

// const menus = module.export = [
//   {
//     key: 'home',
//     name: 'Home',
//     path: '',
//     icon: 'line-chart',
//     click: true,
//   },
//   {
//     key: 'about',
//     name: 'About',
//     path: 'about',
//     icon: 'user',
//     click: true,
//   },
//   {
//     key: 'projects',
//     name: 'Projects',
//     path: 'projects',
//     icon: 'user',
//     click: true,
//   },
//   {
//     key: 'contact',
//     name: 'Contact',
//     path: 'contact',
//     icon: 'user',
//     click: true,
//   }
// ];

class AppLayout extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  }

  getSiderMenu(key, name, icon, path, click, child) {
      if(!click){
        return(
            <SubMenu
              key={key}
              title={<span><Icon type={icon} /><span>{name}</span></span>}
            >
            {
              child.map((item) =>
                <Menu.Item key={item.key}>
                  <Link exact to={"/"+item.path}>
                    {item.name}
                  </Link>
                </Menu.Item>
              )
            }
            </SubMenu>
        );
        } else {
          return(
              <Menu.Item key={key}>
                <Link exact to={"/"+path}>
                <Icon type={icon} />
                <span>{name}</span>
                </Link>
              </Menu.Item>
          );
        }
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route exact path="/work" component={ProjectPage}/>
            <Route path="/work/omg" component={omg}/>
            <Route path="/work/mashiso" component={mashiso}/>
            <Route path="/work/mck" component={mck}/>
            <Route path="/work/jessa18" component={jessa18}/>
            <Route path="/work/pwdo" component={pwdo}/>
            <Route path="/work/:id" component={ProjectDetail}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={NoMatch}/>
          </Switch>
          {/* <img alt data-no-retina className="splatter-background" src={logo} /> */}
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default AppLayout;
